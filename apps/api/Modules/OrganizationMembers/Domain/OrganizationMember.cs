using System.ComponentModel.DataAnnotations;
using Domain.Entity.MembershipRole;
using Microsoft.EntityFrameworkCore;

namespace Members.Domain;

[Index(nameof(OrganizationId), nameof(IsActive))]
public sealed class OrganizationMember
{
    [Key]
    public Guid Id { get; private set; }
    public Guid OrganizationId { get; private set; }
    public string UserId { get; private set; }
    public OrganizationMembershipRole Role { get; private set; }
    public bool IsActive { get; private set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    private OrganizationMember() {}
    
    public OrganizationMember(Guid organizationId, string userId, OrganizationMembershipRole role)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        UserId = userId;
        Role = role;
        IsActive = true;
    }

    public void UpdateRole(OrganizationMembershipRole newRole)
    {
        Role = newRole;
    }

    public void Deactivate()
    {
        IsActive = false;
    }

    public void SetActive(bool isActive)
    {
        IsActive = isActive;
    }
}