using Domain;
using Domain.Entity.Relationships;
using Microsoft.EntityFrameworkCore;

namespace Projects.Domain;

[Index(nameof(OrganizationId), nameof(DeletedAt))]
public sealed class Project : Entity<Guid>
{
    public Guid OrganizationId { get; private set; }
    public string Name { get; private set; }
    public string Slug { get; private set; }
    public string? Description { get; private set; }

    private Project() { }
    
    public Project(Guid organizationId, string name, string slug, string? description)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        Name = name;
        Slug = slug;
        Description = description;
    }

    public void Update(string name, string? description)
    {
        Name = name;
        Description = description;
        SetUpdated();
    }

    public void SoftDelete()
    {
        SetDeleted();
    }
}