using Projects.Application.Queries.DTOs;

namespace Projects.Application.Queries;

public class Queries
{
    private readonly IProjectQueries _queries;

    public Queries(IProjectQueries organizationQueries)
    {
        _queries = organizationQueries;
    }

    public async Task<GetOrganizationProjectsResponse> GetUserOrganizations(GetOrganizationProjectsQuery query,
        CancellationToken ct = default)
    {
        return await _queries.GetOrganizationProjects(query, ct);
    }
}