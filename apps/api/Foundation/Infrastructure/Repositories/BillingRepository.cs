using Billing.Application.Services;
using Billing.Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

internal sealed class BillingRepository : IBillingRepository
{
    private readonly ApplicationDbContext _db;

    public BillingRepository(ApplicationDbContext db) => _db = db;

    public async Task<BillingRecord?> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _db.BillingRecords
            .AsNoTracking()
            .FirstOrDefaultAsync(b => b.OrganizationId == organizationId, ct);
    }

    public async Task AddAsync(BillingRecord billing, CancellationToken ct = default)
    {
        await _db.BillingRecords.AddAsync(billing, ct);
    }

    public async Task UpdateAsync(BillingRecord billing, CancellationToken ct = default)
    {
        _db.BillingRecords.Update(billing);
    }
}