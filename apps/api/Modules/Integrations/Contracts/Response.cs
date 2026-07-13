namespace Integrations.Contracts;

public sealed record IntegrationResponse(
    Guid Id,
    Guid OrganizationId,
    int Provider,
    string Name,
    int Status,
    string ConfigurationJson,
    DateTime CreatedAt,
    DateTime UpdatedAt);