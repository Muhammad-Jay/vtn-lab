namespace Activities.Contracts;

public sealed record ActivityResponse(
    Guid Id,
    Guid OrganizationId,
    Guid? ProjectId,
    string ActorId,
    string Type,
    string Description,
    string? MetadataJson,
    DateTime CreatedAt);