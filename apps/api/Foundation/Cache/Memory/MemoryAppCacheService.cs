using System.Collections.Concurrent;
using Domain.Caching;
using Domain.Caching.Models;
using Microsoft.Extensions.Caching.Memory;

namespace Cache.Memory;

internal sealed class MemoryAppCacheService : IAppCacheService
{
    private readonly IMemoryCache _memoryCache;
    
    // Optimization 1: Use ConcurrentDictionary<string, byte> as a high-performance, thread-safe HashSet
    private static readonly ConcurrentDictionary<string, ConcurrentDictionary<string, byte>> TagIndexRegistry = new();

    public MemoryAppCacheService(IMemoryCache memoryCache)
    {
        _memoryCache = memoryCache;
    }

    public Task<T?> GetAsync<T>(string key, CancellationToken ct = default)
    {
        return Task.FromResult(_memoryCache.TryGetValue(key, out T? value) ? value : default);
    }

    public Task SetAsync<T>(string key, T value, AppCacheOptions options, CancellationToken ct = default)
    {
        var cacheEntryOptions = new MemoryCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = options.AbsoluteExpiration,
            SlidingExpiration = options.SlidingExpiration
        };

        // Optimization 2: Automatically evict keys from the Tag Index when they naturally expire via TTL
        cacheEntryOptions.RegisterPostEvictionCallback((evictedKey, _, reason, _) =>
        {
            // Clean up the TagIndexRegistry memory when a key expires or is removed
            foreach (var tag in options.Tags)
            {
                if (TagIndexRegistry.TryGetValue(tag, out var keysSet))
                {
                    keysSet.TryRemove((string)evictedKey, out _);
                    
                    // Optional: If the tag's inner set is now empty, remove the tag entry entirely
                    if (keysSet.IsEmpty)
                    {
                        TagIndexRegistry.TryRemove(tag, out _);
                    }
                }
            }
        });

        _memoryCache.Set(key, value, cacheEntryOptions);

        // Track key relationships across specified invalidation groups
        foreach (var tag in options.Tags)
        {
            var keysSet = TagIndexRegistry.GetOrAdd(tag, _ => new ConcurrentDictionary<string, byte>());
            keysSet.TryAdd(key, 0); // Fast O(1) thread-safe insertion, handles duplicates natively
        }

        return Task.CompletedTask;
    }

    public Task RemoveAsync(string key, CancellationToken ct = default)
    {
        // The PostEvictionCallback we registered in SetAsync will automatically 
        // handle removing this key from TagIndexRegistry when this runs.
        _memoryCache.Remove(key);
        return Task.CompletedTask;
    }

    public Task RemoveByTagAsync(string tag, CancellationToken ct = default)
    {
        SemaphoreSlim semaphoreSlim = new(10);
        
        if (TagIndexRegistry.TryRemove(tag, out var linkedKeys))
        {
            // Evict keys in parallel over the tracked keys belonging to the tag group
            // We use keys instead of keys.Keys to safely copy snapshot for iteration
            foreach (var key in linkedKeys.Keys)
            {
                _memoryCache.Remove(key);
            }
        }
        return Task.CompletedTask;
    }
    
    public async Task<T> GetOrCreateAsync<T>(
        string key, 
        Func<CancellationToken, Task<T>> factory, 
        AppCacheOptions? options = null, 
        CancellationToken ct = default)
    {
        // 1. Check if the value already exists in the cache
        var cachedValue = await GetAsync<T>(key, ct);
        if (cachedValue is not null)
        {
            return cachedValue;
        }

        // 2. Cache Miss: Execute the delegated data method safely
        var freshData = await factory(ct);

        // 3. Fallback to default options if none were provided
        options ??= AppCacheOptions.Default;

        // 4. Commit the newly generated data back to the cache tracking ledger
        await SetAsync(key, freshData, options, ct);

        return freshData;
    }
}
