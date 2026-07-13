using Members.Application.Services;
using Microsoft.EntityFrameworkCore;
using Members.Domain;

namespace Infrastructure.Repositories;

internal sealed class MembershipRepository : IMembershipRepository
{
    private readonly ApplicationDbContext _db;

    public MembershipRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Membership>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _db.Memberships
            .AsNoTracking()
            .Where(m => m.OrganizationId == organizationId && m.IsActive)
            .OrderBy(m => m.CreatedAt)
            .ToListAsync(ct);
    }

    public async Task<Membership?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Memberships
            .FirstOrDefaultAsync(m => m.Id == id && m.IsActive, ct);
    }

    public void Add(Membership membership)
    {
        _db.Memberships.Add(membership);
    }

    public void Delete(Membership membership)
    {
        // Membership removal: update IsActive to false
        _db.Memberships.Update(membership);
    }
}