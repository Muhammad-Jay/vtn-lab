namespace Organizations.Contracts;

public sealed record CreateOrganizationRequest(
    string Name, 
    string Description);

public sealed record UpdateOrganizationRequest(
    string Name, 
    string? Description,
    string Slug,
    string? LogoUrl);