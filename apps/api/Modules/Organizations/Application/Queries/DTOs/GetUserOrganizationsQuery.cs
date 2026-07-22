using Domain.Entity.Integration;
using Domain.Entity.MembershipRole;

namespace Organizations.Application.Queries.DTOs;

public sealed record GetUserOrganizationsQuery(
    string UserId, 
    OrganizationMembershipRole? Role,
    bool Detailed,
    int DetailLimit = 3);

public sealed record OrganizationQueryResponse(IReadOnlyList<OrganizationQueryItem> Organizations);

public sealed record OrganizationQueryItem(
    Guid Id,
    string Name,
    string? Description,
    string Slug,
    string? LogoUrl,
    int TotalMemberCount,
    int TotalProjectCount,
    // Child details collections (Empty array when Detailed = false)
    IReadOnlyList<ProjectDetail> Projects,
    IReadOnlyList<MemberDetail> Members,
    IReadOnlyList<IntegrationDetail> Integrations
);

public sealed record ProjectDetail(Guid Id, string Name, string Slug, DateTime CreatedAt);
public sealed record MemberDetail(string UserId, string Role, bool IsActive);
public sealed record IntegrationDetail(Guid Id, string Name, IntegrationProvider Provider, IntegrationStatus Status);