using Domain.Caching;
using Application.Abstractions;
using Domain.Contracts.Organizations;

namespace Cache.Handlers.Organizations;

internal sealed class EvictCacheOnOrganizationDeleted : IEventHandler<OrganizationDeletedEvent>
{
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public EvictCacheOnOrganizationDeleted(IAppCacheService cache, ICacheKeyRegistry keys)
    {
        _cache = cache;
        _keys = keys;
    }

    public async Task HandleAsync(OrganizationDeletedEvent @event, CancellationToken ct = default)
    {
        // Get the universal tag for this user: "tag:users:{creatorId}"
        string userTag = _keys.GetUserTag(@event.OwnerId);

        // Instantly purges ALL cached summary/detail views (and role permutations) for this creator
        await _cache.RemoveByTagAsync(userTag, ct);
    }
}