using Integrations.Application.Services;
using Integrations.Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

internal sealed class IntegrationRepository : IIntegrationRepository
{
    private readonly ApplicationDbContext _db;

    public IntegrationRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Integration>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _db.Integrations
            .AsNoTracking()
            .Where(i => i.OrganizationId == organizationId && i.DeletedAt == null)
            .ToListAsync(ct);
    }

    public async Task<Integration?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Integrations
            .AsNoTracking()
            .FirstOrDefaultAsync(i => i.Id == id && i.DeletedAt == null, ct);
    }

    public async Task AddAsync(Integration integration, CancellationToken ct = default)
    {
        await _db.Integrations.AddAsync(integration, ct);
    }

    public void Update(Integration integration)
    {
        _db.Integrations.Update(integration);
    }

    public async Task DeleteAsync(Integration integration, CancellationToken ct = default)
    {
        _db.Integrations.Update(integration);
    }
}