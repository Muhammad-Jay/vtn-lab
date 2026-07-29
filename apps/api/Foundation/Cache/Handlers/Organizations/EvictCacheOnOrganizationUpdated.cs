using Domain.Caching;
using Application.Abstractions;
using Domain.Contracts.Organizations;

namespace Cache.Handlers.Organizations;

internal sealed class EvictCacheOnOrganizationUpdated : IEventHandler<OrganizationUpdatedEvent>
{
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public EvictCacheOnOrganizationUpdated(IAppCacheService cache, ICacheKeyRegistry keys)
    {
        _cache = cache;
        _keys = keys;
    }

    public async Task HandleAsync(OrganizationUpdatedEvent @event, CancellationToken ct = default)
    {
        // Get the universal tag for this user: "tag:users:{creatorId}"
        string userTag = _keys.GetUserTag(@event.OwnerId);

        // Instantly purges ALL cached summary/detail views (and role permutations) for this creator
        await _cache.RemoveByTagAsync(userTag, ct);
    }
}