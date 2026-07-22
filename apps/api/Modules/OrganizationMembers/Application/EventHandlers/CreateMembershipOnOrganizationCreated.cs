using Application.Abstractions;
using Domain.Contracts.Organizations;
using Domain.Entity.MembershipRole;
using Members.Application.Services;
using Members.Domain;

namespace Members.Application.EventHandlers;

public sealed class CreateMembershipOnOrganizationCreated : IEventHandler<OrganizationCreatedEvent>
{
    private readonly IMembershipRepository _membershipRepository;

    public CreateMembershipOnOrganizationCreated(IMembershipRepository membershipRepository)
    {
        _membershipRepository = membershipRepository;
    }

    public async Task HandleAsync(OrganizationCreatedEvent @event, CancellationToken ct = default)
    {
        var membership = new OrganizationMember(@event.OrganizationId, @event.OwnerId, OrganizationMembershipRole.OWNER);
        
        _membershipRepository.Add(membership);
    }
}