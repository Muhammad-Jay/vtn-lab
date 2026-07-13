namespace Domain.Caching;

public interface ICacheKeyRegistry
{
    string CreateUserOrgQueryKey(string userId, string role, bool detailed, int limit);
    string GetUserTag(string userId);
    string GetOrganizationTag(Guid organizationId);
}