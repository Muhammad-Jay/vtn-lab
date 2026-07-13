using Integrations.Domain;

namespace Integrations.Application.Services;

public interface IIntegrationRepository
{
    Task<List<Integration>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default);
    Task<Integration?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task AddAsync(Integration integration, CancellationToken ct = default);
    void Update(Integration integration);
    Task DeleteAsync(Integration integration, CancellationToken ct = default);
}