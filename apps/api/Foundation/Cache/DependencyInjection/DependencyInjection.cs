using Domain.Caching;
using Cache.Internal;
using Cache.Memory;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cache.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddAppCaching(
        this IServiceCollection services, 
        IConfiguration configuration)
    {
        // Always register the type-safe Key Registry
        services.AddSingleton<ICacheKeyRegistry, CacheKeyRegistry>();

        // Check if infrastructure strategy dictates a swap to production Redis distributed setups
        bool useRedis = bool.TryParse(configuration["Caching:UseRedis"], out var result) && result;

        if (useRedis)
        {
            // Future-Proofing Hook: 
            // When ready for Redis, simply build 'RedisAppCacheService' here 
            // and reference services.AddStackExchangeRedisCache(...)
            throw new NotImplementedException("Redis production caching engine provider is not configured yet.");
        }
        else
        {
            // Fast In-Memory fallback implementation
            services.AddMemoryCache();
            services.AddSingleton<IAppCacheService, MemoryAppCacheService>();
        }

        return services;
    }
}