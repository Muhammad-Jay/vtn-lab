using Members.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;
using Domain.Entity.MembershipRole;

namespace Members.Application.Services;

public sealed class MemberService
{
    private readonly IMembershipRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public MemberService(IMembershipRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Guid> InviteMemberAsync(
        Guid organizationId, 
        string userId, 
        OrganizationMembershipRole role, 
        CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(userId))
            throw new ValidationException("User ID is required to add a member.");

        var membership = new OrganizationMember(organizationId, userId, role);

        _repository.Add(membership);
        await _unitOfWork.SaveChangesAsync(ct);

        return membership.Id;
    }

    public async Task<List<OrganizationMember>> GetMembersByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _repository.GetByOrganizationIdAsync(organizationId, ct);
    }

    public async Task UpdateRoleAsync(Guid id, OrganizationMembershipRole newRole, bool isActive = true, CancellationToken ct = default)
    {
        var membership = await _repository.GetByIdAsync(id, ct);
        
        if (membership is null)
            throw new NotFoundException(nameof(OrganizationMember), id);

        membership.UpdateRole(newRole);
        membership.SetActive(isActive);

        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task RemoveMemberAsync(Guid id, CancellationToken ct = default)
    {
        var membership = await _repository.GetByIdAsync(id, ct);
        
        if (membership is null)
            throw new NotFoundException(nameof(OrganizationMember), id);

        membership.Deactivate();

        _repository.Delete(membership);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}