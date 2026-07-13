using Organizations.Domain;

namespace Organizations.Application.Services;

public interface IOrganizationRepository
{
    Task<Organization?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<List<Organization>> GetAllAsync(string ownerId, CancellationToken ct = default);
    Task<bool> SlugExistsAsync(string slug, CancellationToken ct = default);
    void Update(Organization organization);
    void Add(Organization organization);
    void Delete(Organization organization);
}