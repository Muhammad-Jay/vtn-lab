using Domain;

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
