using Domain.Entity.Billing;
using Domain.Entity.MembershipRole;

namespace Organizations.Application.Queries.DTOs;

public sealed record GetOrganizationContextQuery(
    string UserId,
    Guid? OrganizationId = null,
    string? Slug = null,
    int ProjectLimit = 3,
    int ActivityLimit = 10
);

public sealed record GetOrganizationContextResponse(
    OrganizationContextDto Organization
);

public sealed record OrganizationContextDto(
    Guid Id,
    string Name,
    string Slug,
    string? LogoUrl,
    OrganizationMemberDto Membership,
    OrganizationBillingDto? Billing,
    int MemberCount,
    int ProjectCount,
    IReadOnlyList<OrganizationProjectDto> Projects,
    IReadOnlyList<OrganizationActivityDto> Activities
);

public sealed record OrganizationMemberDto(
    Guid Id,
    string UserId,
    OrganizationMembershipRole Role,
    bool IsActive,
    DateTime JoinedAt
);

public sealed record OrganizationBillingDto(
    Guid Id,
    BillingStatus Status,
    DateTime? CurrentPeriodEndsAt
);

public sealed record OrganizationActivityDto(
    Guid Id,
    string Type,
    string Description,
    DateTime CreatedAt
);

public sealed record OrganizationProjectDto(
    Guid Id,
    string Name,
    string Slug,
    string? Description,
    DateTime CreatedAt
);