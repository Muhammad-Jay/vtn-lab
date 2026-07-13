using Projects.Domain;

namespace Projects.Application.Services;

public interface IProjectRepository
{
    Task<List<Project>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default);
    Task<Project?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<bool> SlugExistsAsync(string slug, Guid organizationId, CancellationToken ct = default);
    Task AddAsync(Project project, CancellationToken ct = default);
    Task DeleteAsync(Project project, CancellationToken ct = default);
}