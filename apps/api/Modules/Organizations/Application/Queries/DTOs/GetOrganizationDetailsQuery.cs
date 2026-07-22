// using Domain.Entity.Integration;
// using Domain.Entity.MembershipRole;
//
// namespace Organizations.Application.Queries.DTOs;
//
// public sealed record OrganizationDetailResponse(List<OrganizationDetails> Organizations);
//
// // Individual detailed organization payload
// public sealed record OrganizationDetails(
//     Guid Id,
//     string Name,
//     string? Description,
//     string Slug,
//     string? LogoUrl,
//     List<ProjectDetail> Projects,
//     List<MemberDetail> OrganizationMembers,
//     List<IntegrationDetail> Integrations
// );
//
// // Child records representing the module data shapes
// public sealed record ProjectDetail(Guid Id, string Name, string Slug, DateTime CreatedAt);
//
// public sealed record MemberDetail(string UserId, string Role, bool IsActive);
//
// public sealed record IntegrationDetail(Guid Id, string Name, IntegrationProvider Provider, IntegrationStatus Status);