using Integrations.Application.Services;
using Integrations.Domain;

namespace Infrastructure.Repositories;

internal sealed class ProjectIntegrationRepository : IProjectIntegrationRepository
{
    private readonly ApplicationDbContext _db;

    public ProjectIntegrationRepository(ApplicationDbContext db) => _db = db;

    public async Task AddAsync(ProjectIntegration projectIntegration, CancellationToken ct = default)
    {
        await _db.ProjectIntegrations.AddAsync(projectIntegration, ct);
    }
}