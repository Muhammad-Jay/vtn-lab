using Organizations.Application.Queries.DTOs;

namespace Organizations.Application.Queries;

public interface IOrganizationContextQueries
{
    Task<GetOrganizationContextResponse?> GetOrganizationContext(
        GetOrganizationContextQuery query,
        CancellationToken ct = default);
}