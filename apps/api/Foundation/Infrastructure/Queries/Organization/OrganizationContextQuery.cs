using Activities.Domain;
using Billing.Domain;
using Microsoft.EntityFrameworkCore;
using OrganizationMembers.Domain;
using Organizations.Application.Queries;
using Organizations.Application.Queries.DTOs;
using Projects.Domain;

namespace Infrastructure.Queries.Organization;

public class OrganizationContextQuery: IOrganizationContextQueries
{
    private readonly ApplicationDbContext _db;
    
    public OrganizationContextQuery(ApplicationDbContext db)
    {
        _db = db;
    }
    
    public async Task<GetOrganizationContextResponse?> GetOrganizationContext(
    GetOrganizationContextQuery query,
    CancellationToken ct = default) 
    {
        return await _db.Set<Organizations.Domain.Organization>()
        .AsNoTracking()
        .Where(o => o.DeletedAt == null)
        .Where(o =>
            query.OrganizationId.HasValue
                ? o.Id == query.OrganizationId
                : o.Slug == query.Slug)
        .Where(o =>
            _db.Set<OrganizationMember>()
                .Any(m =>
                    m.OrganizationId == o.Id &&
                    m.UserId == query.UserId &&
                    m.IsActive))
        .Select(o => new GetOrganizationContextResponse(
            new OrganizationContextDto(

                Id: o.Id,
                Name: o.Name,
                Slug: o.Slug,
                LogoUrl: o.LogoUrl,
                Membership: _db.Set<OrganizationMember>()
                        .Where(m =>
                            m.OrganizationId == o.Id &&
                            m.UserId == query.UserId)
                        .Select(m => new OrganizationMemberDto(
                            m.Id,
                            m.UserId,
                            m.Role,
                            m.IsActive,
                            m.CreatedAt))
                        .Single(),
                Billing: _db.Set<BillingRecord>()
                        .Where(b =>
                            b.OrganizationId == o.Id)
                        .Select(b => new OrganizationBillingDto(
                            b.Id,
                            b.Status,
                            b.UpdatedAt))
                        .SingleOrDefault(),
                MemberCount: _db.Set<OrganizationMember>()
                        .Count(m =>
                            m.OrganizationId == o.Id &&
                            m.IsActive),
                ProjectCount: _db.Set<Project>()
                        .Count(p =>
                            p.OrganizationId == o.Id &&
                            p.DeletedAt == null),
                Projects: _db.Set<Project>()
                        .Where(p =>
                            p.OrganizationId == o.Id &&
                            p.DeletedAt == null)
                        .OrderByDescending(p => p.CreatedAt)
                        .Take(query.ProjectLimit)
                        .Select(p => new OrganizationProjectDto(
                            p.Id,
                            p.Name,
                            p.Slug,
                            p.Description,
                            p.CreatedAt))
                        .ToList(),
                Activities: _db.Set<Activity>()
                        .Where(a =>
                            a.OrganizationId == o.Id &&
                            a.DeletedAt == null)
                        .OrderByDescending(a => a.CreatedAt)
                        .Take(query.ActivityLimit)
                        .Select(a => new OrganizationActivityDto(
                            a.Id,
                            a.Type,
                            a.Description,
                            a.CreatedAt))
                        .ToList()
            )))
        .FirstOrDefaultAsync(ct);
    
    }
}