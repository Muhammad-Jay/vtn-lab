using Domain.Caching;
using Domain.Caching.Models;
using Projects.Application.Queries;
using Projects.Application.Queries.DTOs;

namespace Infrastructure.Queries.Projects;

public class CachedProjectQueries : IProjectQueries
{
    private readonly IProjectQueries _inner;
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public CachedProjectQueries(
        IProjectQueries inner,
        IAppCacheService cache, 
        ICacheKeyRegistry keys)
    {
        _inner = inner;
        _cache = cache;
        _keys = keys;
    }
    
    public async Task<GetOrganizationProjectsResponse> GetOrganizationProjects(GetOrganizationProjectsQuery query, CancellationToken ct = default)
    {
        string roleValue = query.Role?.ToString() ?? "all";
        
        string key = _keys.CreateOrganizationProjectQueryKey(query.OrganizationId, roleValue, query.Detailed, query.Limits);
        
        var cachedData = await _cache.GetAsync<GetOrganizationProjectsResponse>(key, ct);
        if (cachedData is not null)
        {
            return cachedData;
        }
        
        var freshData = await _inner.GetOrganizationProjects(query, ct);

        var tags = new List<string> { _keys.GetOrganizationTag(query.OrganizationId) };

        if (query.Detailed && freshData?.Projects is not null)
        {
            foreach (var project in freshData.Projects)
            {
                tags.Add(_keys.GetProjectTag(project.Id));
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