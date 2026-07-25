using OrganizationMembers.Application.Services;
using Microsoft.EntityFrameworkCore;
using OrganizationMembers.Domain;

namespace Infrastructure.Repositories;

internal sealed class OrganizationMembersRepository : IMembershipRepository
{
    private readonly ApplicationDbContext _db;

    public OrganizationMembersRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<OrganizationMember>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _db.Memberships
            .AsNoTracking()
            .Where(m => m.OrganizationId == organizationId && m.IsActive)
            .OrderBy(m => m.CreatedAt)
            .ToListAsync(ct);
    }

    public async Task<OrganizationMember?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Memberships
            .FirstOrDefaultAsync(m => m.Id == id && m.IsActive, ct);
    }

    public void Add(OrganizationMember membership)
    {
        _db.Memberships.Add(membership);
    }

    public void Delete(OrganizationMember membership)
    {
        // Membership removal: update IsActive to false
        _db.Memberships.Update(membership);
    }
}