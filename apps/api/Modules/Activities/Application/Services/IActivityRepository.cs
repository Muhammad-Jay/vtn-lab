using Activities.Domain;

namespace Activities.Application.Services;

public interface IActivityRepository
{
    Task<List<Activity>> GetByOrganizationIdAsync(Guid organizationId, int limit, CancellationToken ct = default);
    Task<List<Activity>> GetByProjectIdAsync(Guid projectId, int limit, CancellationToken ct = default);
    Task AddAsync(Activity activity, CancellationToken ct = default);
}