using Domain;
using Domain.Entity.Integration;

namespace Integrations.Domain;

public sealed class Integration : Entity<Guid>
{
    public Guid OrganizationId { get; private set; }
    public IntegrationProvider Provider { get; private set; }
    public string Name { get; private set; }
    public IntegrationStatus Status { get; private set; }
    public string ConfigurationJson { get; private set; }
    
    private Integration() {}
    public Integration(Guid organizationId, IntegrationProvider provider, string name, string configurationJson)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        Provider = provider;
        Name = name;
        ConfigurationJson = configurationJson;
        Status = IntegrationStatus.ACTIVE;
    }

    public void UpdateConfiguration(string name, string configurationJson)
    {
        Name = name;
        ConfigurationJson = configurationJson;
        SetUpdated();
    }

    public void UpdateStatus(IntegrationStatus status)
    {
        Status = status;
        SetUpdated();
    }

    public void SoftDelete() => SetDeleted();
}