using Domain.Abstractions;

namespace Domain.Contracts.Projects;

public sealed record ProjectCreatedEvent(
    Guid OrganizationId,
    string UserId,
    EventMetadata Metadata) : IEvent;