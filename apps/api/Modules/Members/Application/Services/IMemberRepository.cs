using Members.Domain;

namespace Members.Application.Services;
public interface IMembershipRepository
{
    Task<List<Membership>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default);
    Task<Membership?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Add(Membership membership);
    void Delete(Membership membership);
}