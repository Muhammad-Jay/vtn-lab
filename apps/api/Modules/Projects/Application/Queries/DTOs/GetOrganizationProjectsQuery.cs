using Domain.Entity.MembershipRole;
using Projects.Domain;

namespace Projects.Application.Queries.DTOs;

public sealed record GetOrganizationProjectsQuery(
    string UserId,
    Guid OrganizationId,
    OrganizationMembershipRole? Role,
    bool Detailed,
    int Limits = 8,
    int DetailLimit = 3);
    
public sealed record GetOrganizationProjectsResponse(IReadOnlyList<Project> Projects);