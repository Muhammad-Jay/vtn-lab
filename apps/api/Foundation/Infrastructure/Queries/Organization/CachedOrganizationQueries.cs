using Domain.Caching;
using Domain.Caching.Models;
using Organizations.Application.Queries;
using Organizations.Application.Queries.DTOs;

namespace Infrastructure.Queries.Organization;

public sealed class CachedOrganizationQueries : IOrganizationQueries
{
    private readonly IOrganizationQueries _inner; 
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public CachedOrganizationQueries(
        IOrganizationQueries inner, 
        IAppCacheService cache, 
        ICacheKeyRegistry keys)
    {
        _inner = inner;
        _cache = cache;
        _keys = keys;
    }

    public async Task<OrganizationQueryResponse> GetUserOrganizations(
        GetUserOrganizationsQuery query, 
        CancellationToken ct = default)
    {
        string roleValue = query.Role?.ToString() ?? "all";
        
        // Dynamic Key signature mapping every variable permutation
        string key = _keys.CreateUserOrgQueryKey(query.UserId, roleValue, query.Detailed, query.DetailLimit);

        var cachedData = await _cache.GetAsync<OrganizationQueryResponse>(key, ct);
        if (cachedData is not null)
        {
            return cachedData;
        }

        var freshData = await _inner.GetUserOrganizations(query, ct);

        // Core user tagging association
        var tags = new List<string> { _keys.GetUserTag(query.UserId) };

        // Cross-boundary registration if deep child views are currently contained
        if (query.Detailed && freshData?.Organizations is not null)
        {
            foreach (var org in freshData.Organizations)
            {
                tags.Add(_keys.GetOrganizationTag(org.Id));
            }
        }

        var cacheOptions = new AppCacheOptions
        {
            AbsoluteExpiration = query.Detailed ? TimeSpan.FromMinutes(5) : TimeSpan.FromMinutes(2),
            Tags = tags
        };

        await _cache.SetAsync(key, freshData!, cacheOptions, ct);
        return freshData;
    }
}