using Integrations.Domain;
using Members.Domain;
using Microsoft.EntityFrameworkCore;
using Organizations.Application.Queries;
using Organizations.Application.Queries.DTOs;
using Organizations.Domain;
using Projects.Domain;

namespace Infrastructure.Queries.Organization;

public class OrganizationQueries : IOrganizationQueries
{
    private readonly ApplicationDbContext _db;
    
    public OrganizationQueries(ApplicationDbContext db)
    {
        _db = db;
    }

    public async Task<OrganizationQueryResponse> GetUserOrganizations(
        GetUserOrganizationsQuery query, 
        CancellationToken ct = default)
    {
        var memberships = _db.Set<OrganizationMember>()
            .AsNoTracking()
            .Where(x => x.UserId == query.UserId && x.IsActive);
        
        if (query.Role is not null)
        {
            memberships = memberships.Where(m => m.Role == query.Role);
        }

        var results = await (
                from membership in memberships
                join org in _db.Set<Organizations.Domain.Organization>() on membership.OrganizationId equals org.Id
                where org.DeletedAt == null
                select new
                {
                    org.Id,
                    org.Name,
                    org.Description,
                    org.Slug,
                    org.LogoUrl,
                    MemberCount = _db.Set<OrganizationMember>().Count(m => m.OrganizationId == org.Id && m.IsActive),
                    ProjectCount = _db.Set<Project>().Count(p => p.OrganizationId == org.Id && p.DeletedAt == null),
                    
                    // Conditionally load the child collections based on the detailed flag
                    Projects = query.Detailed 
                        ? _db.Set<Project>()
                            .Where(p => p.OrganizationId == org.Id && p.DeletedAt == null)
                            .OrderByDescending(p => p.CreatedAt)
                            .Take(query.DetailLimit)
                            .Select(p => new ProjectDetail(p.Id, p.Name, p.Slug, p.CreatedAt))
                            .ToList()
                        : new List<ProjectDetail>(),

                    Members = query.Detailed 
                        ? _db.Set<OrganizationMember>()
                            .Where(m => m.OrganizationId == org.Id)
                            .Take(query.DetailLimit)
                            .Select(m => new MemberDetail(m.UserId, m.Role.ToString(), m.IsActive))
                            .ToList()
                        : new List<MemberDetail>(),

                    Integrations = query.Detailed 
                        ? _db.Set<Integration>()
                            .Where(i => i.OrganizationId == org.Id)
                            .Take(query.DetailLimit)
                            .Select(i => new IntegrationDetail(i.Id, i.Name, i.Provider, i.Status))
                            .ToList()
                        : new List<IntegrationDetail>()
                }
            )
            .OrderBy(x => x.Name)
            .Select(x => new OrganizationQueryItem(
                x.Id,
                x.Name,
                x.Description,
                x.Slug,
                x.LogoUrl,
                x.MemberCount,
                x.ProjectCount,
                x.Projects,
                x.Members,
                x.Integrations))
            .ToListAsync(ct);
    
        return new OrganizationQueryResponse(results);
    }
}