using Domain.Abstractions;

namespace Domain.Contracts.Organizations;

public sealed record OrganizationCreatedEvent(
    Guid OrganizationId,
    string OwnerId,
    string Name,
    EventMetadata Metadata) : IEvent;
    
public sealed record OrganizationDeletedEvent(
    Guid OrganizationId,
    string OwnerId,
    EventMetadata Metadata) : IEvent;
    
public sealed record UpdatedData( 
    string Name,
    string? Description,
    string Slug,
    string? LogoUrl);

public sealed record OrganizationUpdatedEvent(
    Guid OrganizationId,
    string OwnerId,
    UpdatedData UpdatedData,
    EventMetadata Metadata) : IEvent;