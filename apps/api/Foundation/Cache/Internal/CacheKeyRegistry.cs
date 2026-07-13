using Domain.Caching;

namespace Cache.Internal;

internal sealed class CacheKeyRegistry : ICacheKeyRegistry
{
    private const string SystemPrefix = "vtn";

    public string CreateUserOrgQueryKey(string userId, string role, bool detailed, int limit) 
        => $"{SystemPrefix}:users:{userId.ToLowerInvariant()}:orgs:role={role.ToLowerInvariant()}:detailed={detailed.ToString().ToLowerInvariant()}:limit={limit}";

    public string GetUserTag(string userId) 
        => $"tag:users:{userId.ToLowerInvariant()}";

    public string GetOrganizationTag(Guid organizationId) 
        => $"tag:organizations:{organizationId.ToString().ToLowerInvariant()}";
}