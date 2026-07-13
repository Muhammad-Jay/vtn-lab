namespace Organizations.Contracts;

public sealed record OrganizationResponse(
    Guid Id,
    string Name,
    string Slug,
    string? Description,
    string? LogoUrl,
    DateTime CreatedAt,
    DateTime UpdatedAt);