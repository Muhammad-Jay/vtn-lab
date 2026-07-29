using Domain;
using Organizations.Contracts;

namespace Organizations.Domain;

public sealed class Organization: Entity<Guid>
{
    public string Name { get; private set; }
    public string? Description { get; private set; }
    public string Slug { get; private set; }
    public string? LogoUrl { get; private set; }
    
    public Organization(string name, string slug, string? description)
    {
        Id = Guid.NewGuid();
        Name = name;
        Slug = slug;
        Description = description;
    }

    public void Update(UpdateOrganizationRequest updates)
        {
            if (!string.IsNullOrWhiteSpace(updates.Name))
            {
                Name = updates.Name;
            }

            if (!string.IsNullOrWhiteSpace(updates.Slug))
            {
                Slug = updates.Slug;
            }

            if (updates.Description != null)
            {
                Description = updates.Description;
            }

            if (updates.LogoUrl != null)
            {
                LogoUrl = updates.LogoUrl;
            }

            SetUpdated();
        }

    public void SoftDelete()
    {
        SetDeleted();
    }
}
