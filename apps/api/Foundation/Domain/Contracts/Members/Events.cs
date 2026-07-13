using Domain.Abstractions;

namespace Domain.Contracts.Members;

public sealed record UserJoinedOrganizationEvent(
    Guid OrganizationId, 
    string JoinedUserId,
    EventMetadata Metadata) : IEvent;