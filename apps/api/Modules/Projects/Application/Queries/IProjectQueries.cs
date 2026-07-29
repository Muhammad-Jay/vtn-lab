using Projects.Application.Queries.DTOs;

namespace Projects.Application.Queries;

public interface IProjectQueries
{
    Task<GetOrganizationProjectsResponse> GetOrganizationProjects(
        GetOrganizationProjectsQuery query,
        CancellationToken ct = default);
}