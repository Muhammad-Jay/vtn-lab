using Domain.Caching;
using Domain.Caching.Models;
using Organizations.Application.Queries;
using Organizations.Application.Queries.DTOs;

namespace Infrastructure.Queries.Organization;

public sealed class CachedOrganizationContextQueries
    : IOrganizationContextQueries
{
    private readonly IOrganizationContextQueries _inner;
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public CachedOrganizationContextQueries(
        IOrganizationContextQueries inner,
        IAppCacheService cache,
        ICacheKeyRegistry keys)
    {
        _inner = inner;
        _cache = cache;
        _keys = keys;
    }

    public async Task<GetOrganizationContextResponse?> GetOrganizationContext(
        GetOrganizationContextQuery query,
        CancellationToken ct = default)
    {
        var key = _keys.CreateOrganizationContextQueryKey(
            query.OrganizationId,
            query.Slug,
            query.UserId,
            query.ProjectLimit,
            query.ActivityLimit);

        var cached =
            await _cache.GetAsync<GetOrganizationContextResponse>(
                key,
                ct);

        if (cached is not null)
            return cached;

        var response =
            await _inner.GetOrganizationContext(
                query,
                ct);

        if (response is null)
            return null;

        var organizationId =
            response.Organization.Id;

        await _cache.SetAsync(
            key,
            response,
            new AppCacheOptions
            {
                AbsoluteExpiration = TimeSpan.FromMinutes(2),
                Tags =
                [
                    _keys.GetOrganizationTag(organizationId),
                    _keys.GetUserTag(query.UserId)
                ]
            },
            ct);

        return response;
    }
}