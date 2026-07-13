namespace Projects.Contracts;

public sealed record ProjectResponse(
    Guid Id,
    Guid OrganizationId,
    string Name,
    string Slug,
    string? Description,
    DateTime CreatedAt,
    DateTime UpdatedAt);