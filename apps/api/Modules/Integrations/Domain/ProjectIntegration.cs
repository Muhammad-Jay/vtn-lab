namespace Integrations.Domain;

public sealed class ProjectIntegration
{
    public Guid Id { get; private set; }

    public Guid ProjectId { get; private set; } // Cross-module primitive reference

    public Guid IntegrationId { get; private set; } // Intra-module domain reference

    public DateTime CreatedAt { get; private set; }
    
    private ProjectIntegration() {}

    public ProjectIntegration(Guid projectId, Guid integrationId)
    {
        ProjectId = projectId;
        IntegrationId = integrationId;
        CreatedAt = DateTime.UtcNow;
    }
}