using System;

namespace Domain.Caching;

public interface ICacheKeyRegistry
{
    string CreateUserOrgQueryKey(string userId, string role, bool detailed, int limit);
    string GetUserTag(string userId);
    string GetOrganizationTag(Guid organizationId);
    string CreateOrganizationProjectQueryKey(Guid organizationId, string role, bool detailed, int limit);
    string GetProjectTag(Guid projectId);
    string CreateOrganizationContextQueryKey(
        Guid? organizationId,
        string? slug,
        string userId,
        int projectLimit,
        int activityLimit);
}