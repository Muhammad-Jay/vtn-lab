namespace Integrations.Contracts;

public sealed record CreateIntegrationRequest(
    int Provider, 
    string Name, 
    string ConfigurationJson);

public sealed record UpdateIntegrationRequest(
    string Name, 
    string ConfigurationJson);

public sealed record AssociateProjectRequest(
    Guid ProjectId);