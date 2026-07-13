using Microsoft.EntityFrameworkCore;
using Organizations.Application.Services;
using Organizations.Domain;

namespace Infrastructure.Repositories;

internal sealed class OrganizationRepository : IOrganizationRepository
{
    private readonly ApplicationDbContext _db;

    public OrganizationRepository(ApplicationDbContext db) => _db = db;

    public async Task<Organization?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Organizations
            .AsNoTracking()
            .FirstOrDefaultAsync(o => o.Id == id && o.DeletedAt == null, ct);
    }

    public async Task<List<Organization>> GetAllAsync(string ownerId, CancellationToken ct = default)
    {
        return await _db.Organizations
            .AsNoTracking()
            .Where(o => o.DeletedAt == null)
            .OrderByDescending(o => o.CreatedAt)
            .ToListAsync(ct);
    }

    public async Task<bool> SlugExistsAsync(string slug, CancellationToken ct = default)
    {
        return await _db.Organizations
            .AnyAsync(o => o.Slug == slug && o.DeletedAt == null, ct);
    }

    public void Add(Organization organization)
    {
        _db.Organizations.Add(organization);
    }

    public void Delete(Organization organization)
    {
        // Soft delete pattern
        _db.Organizations.Update(organization);
    }
    
    public void Update(Organization organization)
    {
        // Explicitly updating the entity ensures the state is marked as modified
        _db.Organizations.Update(organization);
    }
}