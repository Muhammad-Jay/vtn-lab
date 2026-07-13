using Domain;

namespace Activities.Domain;

public sealed class Activity: Entity<Guid>
{
    public Guid OrganizationId { get; private set; } // Cross-module primitive reference

    public Guid? ProjectId { get; private set; } // Cross-module primitive reference

    public string ActorId { get; private set; } = null!; // Cross-module Clerk string ID reference

    public string Type { get; private set; } = null!;

    public string Description { get; private set; } = null!;

    public string? MetadataJson { get; private set; } // Plain JSON text payload
    
    private Activity() {}
    public Activity(
        Guid organizationId, 
        Guid? projectId, 
        string actorId, 
        string type, 
        string description, 
        string? metadataJson)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        ProjectId = projectId;
        ActorId = actorId;
        Type = type;
        Description = description;
        MetadataJson = metadataJson;
    }
}