using System.ComponentModel.DataAnnotations;
using Domain.Entity.MembershipRole;
using Microsoft.EntityFrameworkCore;

namespace Members.Domain;

[Index(nameof(OrganizationId), nameof(IsActive))]
public sealed class Membership
{
    [Key]
    public Guid Id { get; private set; }
    public Guid OrganizationId { get; private set; }
    public string UserId { get; private set; }
    public MembershipRole Role { get; private set; }
    public bool IsActive { get; private set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    private Membership() {}
    public Membership(Guid organizationId, string userId, MembershipRole role)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        UserId = userId;
        Role = role;
        IsActive = true;
    }

    public void UpdateRole(MembershipRole newRole)
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