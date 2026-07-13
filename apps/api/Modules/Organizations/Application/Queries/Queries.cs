using Organizations.Application.Queries.DTOs;

namespace Organizations.Application.Queries;

internal sealed class Queries
{
    private readonly IOrganizationQueries _queries;

    public Queries(IOrganizationQueries organizationQueries)
    {
        _queries = organizationQueries;
    }

    public async Task<OrganizationQueryResponse> GetUserOrganizations(GetUserOrganizationsQuery query,
        CancellationToken ct = default)
    {
        return await _queries.GetUserOrganizations(query, ct);
    }
}