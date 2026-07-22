using Members.Domain;

namespace Members.Application.Services;
public interface IMembershipRepository
{
    Task<List<OrganizationMember>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default);
    Task<OrganizationMember?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Add(OrganizationMember membership);
    void Delete(OrganizationMember membership);
}