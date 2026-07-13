using Integrations.Domain;

namespace Integrations.Application.Services;

public interface IProjectIntegrationRepository
{
    Task AddAsync(ProjectIntegration projectIntegration, CancellationToken ct = default);
}