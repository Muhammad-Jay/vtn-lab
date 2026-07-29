using Microsoft.EntityFrameworkCore;
using OrganizationMembers.Domain;
using Projects.Application.Queries;
using Projects.Application.Queries.DTOs;
using Projects.Domain;

namespace Infrastructure.Queries.Projects;

public class ProjectQueries : IProjectQueries
{
    private readonly ApplicationDbContext _db;

    public ProjectQueries(ApplicationDbContext db)
    {
        _db = db;
    }
    
    public async Task<GetOrganizationProjectsResponse> GetOrganizationProjects(GetOrganizationProjectsQuery query, CancellationToken ct = default)
    {
        var hasAccess = await _db.Set<OrganizationMember>()
            .AnyAsync(m => m.UserId == query.UserId 
                           && m.OrganizationId == query.OrganizationId 
                           && m.IsActive 
                           && (query.Role == null || m.Role == query.Role), ct);

        if (!hasAccess)
        {
            return new GetOrganizationProjectsResponse(new List<Project>());
        }

        var projectsQuery = _db.Set<Project>()
            .AsNoTracking()
            .Where(p => p.OrganizationId == query.OrganizationId && p.DeletedAt == null)
            .OrderByDescending(p => p.CreatedAt)
            .Take(query.Limits);

        var projects = await projectsQuery.ToListAsync(ct);

        return new GetOrganizationProjectsResponse(projects);
    }
}