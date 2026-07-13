using Domain.Caching.Models;

namespace Domain.Caching;

public interface IAppCacheService
{
    Task<T?> GetAsync<T>(string key, CancellationToken ct = default);
    
    Task SetAsync<T>(string key, T value, AppCacheOptions options, CancellationToken ct = default);
    
    Task RemoveAsync(string key, CancellationToken ct = default);
    
    // Invalidates every single key attached to a specific tag instantly
    Task RemoveByTagAsync(string tag, CancellationToken ct = default);
    
    Task<T> GetOrCreateAsync<T>(
        string key, 
        Func<CancellationToken, Task<T>> factory, 
        AppCacheOptions? options = null, 
        CancellationToken ct = default);
}