using Activities.Application.Services;
using Activities.Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

internal sealed class ActivityRepository : IActivityRepository
{
    private readonly ApplicationDbContext _db;

    public ActivityRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Activity>> GetByOrganizationIdAsync(Guid organizationId, int limit, CancellationToken ct = default)
    {
        return await _db.Activities
            .AsNoTracking()
            .Where(a => a.OrganizationId == organizationId && a.DeletedAt == null)
            .OrderByDescending(a => a.CreatedAt)
            .Take(limit)
            .ToListAsync(ct);
    }

    public async Task<List<Activity>> GetByProjectIdAsync(Guid projectId, int limit, CancellationToken ct = default)
    {
        return await _db.Activities
            .AsNoTracking()
            .Where(a => a.ProjectId == projectId && a.DeletedAt == null)
            .OrderByDescending(a => a.CreatedAt)
            .Take(limit)
            .ToListAsync(ct);
    }

    public async Task AddAsync(Activity activity, CancellationToken ct = default)
    {
        await _db.Activities.AddAsync(activity, ct);
    }
}