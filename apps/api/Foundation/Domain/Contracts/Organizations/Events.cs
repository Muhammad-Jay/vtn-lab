using Domain.Abstractions;

namespace Domain.Contracts.Organizations;

public sealed record OrganizationCreatedEvent(
    Guid OrganizationId,
    string OwnerId,
    string Name,
    EventMetadata Metadata) : IEvent;