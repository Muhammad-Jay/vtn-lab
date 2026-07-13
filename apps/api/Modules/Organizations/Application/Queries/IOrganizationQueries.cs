using Organizations.Application.Queries.DTOs;

namespace Organizations.Application.Queries;

public interface IOrganizationQueries
{
    Task<OrganizationQueryResponse> GetUserOrganizations(
        GetUserOrganizationsQuery query,
        CancellationToken ct = default);
}