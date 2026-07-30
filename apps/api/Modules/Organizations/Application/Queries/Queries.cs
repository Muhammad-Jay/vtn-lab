using Organizations.Application.Queries.DTOs;

namespace Organizations.Application.Queries;

internal sealed class Queries
{
    private readonly IOrganizationQueries _queries;
    private readonly IOrganizationContextQueries _contextQueries;

    public Queries(IOrganizationQueries organizationQueries, IOrganizationContextQueries contextQueries)
    {
        _queries = organizationQueries;
        _contextQueries = contextQueries;
    }

    public async Task<OrganizationQueryResponse> GetUserOrganizations(GetUserOrganizationsQuery query,
        CancellationToken ct = default)
    {
        return await _queries.GetUserOrganizations(query, ct);
    }
    
    public async Task<GetOrganizationContextResponse?> GetOrganizationContext(GetOrganizationContextQuery query,
        CancellationToken ct = default)
    {
        return await _contextQueries.GetOrganizationContext(query, ct);
    }
}