using Microsoft.EntityFrameworkCore;
using Projects.Application.Services;
using Projects.Domain;

namespace Infrastructure.Repositories;

internal sealed class ProjectRepository : IProjectRepository
{
    private readonly ApplicationDbContext _db;

    public ProjectRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Project>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _db.Projects
            .AsNoTracking()
            .Where(p => p.OrganizationId == organizationId && p.DeletedAt == null)
            .OrderByDescending(p => p.CreatedAt)
            .ToListAsync(ct);
    }

    public async Task<Project?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Projects
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == id && p.DeletedAt == null, ct);
    }

    public async Task<bool> SlugExistsAsync(string slug, Guid organizationId, CancellationToken ct = default)
    {
        return await _db.Projects
            .AnyAsync(p => p.Slug == slug && p.OrganizationId == organizationId && p.DeletedAt == null, ct);
    }

    public async Task AddAsync(Project project, CancellationToken ct = default)
    {
        await _db.Projects.AddAsync(project, ct);
    }

    public async Task DeleteAsync(Project project, CancellationToken ct = default)
    {
        _db.Projects.Update(project);
    }
}