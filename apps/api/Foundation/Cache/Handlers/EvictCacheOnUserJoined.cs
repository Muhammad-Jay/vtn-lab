using Application.Abstractions;
using Domain.Caching;
using Domain.Contracts.Members;

namespace Cache.Handlers;

internal sealed class EvictCacheOnUserJoined : IEventHandler<UserJoinedOrganizationEvent>
{
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public EvictCacheOnUserJoined(IAppCacheService cache, ICacheKeyRegistry keys)
    {
        _cache = cache;
        _keys = keys;
    }

    public async Task HandleAsync(UserJoinedOrganizationEvent @event, CancellationToken ct = default)
    {
        // 1. Evict the newly joined user's personal lookup caches entirely
        string userTag = _keys.GetUserTag(@event.JoinedUserId);
        await _cache.RemoveByTagAsync(userTag, ct);

        // 2. Evict the organization's tag group so all current workers see the new team member
        string orgTag = _keys.GetOrganizationTag(@event.OrganizationId);
        await _cache.RemoveByTagAsync(orgTag, ct);
    }
}