using Application.Abstractions;
using Domain.Caching;
using Domain.Contracts.Projects;

namespace Cache.Handlers;

internal sealed class EvictCacheOnProjectCreated : IEventHandler<ProjectCreatedEvent>
{
    private readonly IAppCacheService _cache;
    private readonly ICacheKeyRegistry _keys;

    public EvictCacheOnProjectCreated(IAppCacheService cache, ICacheKeyRegistry keys)
    {
        _cache = cache;
        _keys = keys;
    }

    public async Task HandleAsync(ProjectCreatedEvent @event, CancellationToken ct = default)
    {
        // Target the organization tag group directly
        string orgTag = _keys.GetOrganizationTag(@event.OrganizationId);

        // Every user cache entry that contains this organization's details is wiped instantly
        await _cache.RemoveByTagAsync(orgTag, ct);
    }
}