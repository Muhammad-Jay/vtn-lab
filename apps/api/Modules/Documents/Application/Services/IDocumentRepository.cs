using Documents.Domain;

namespace Documents.Application.Services;

public interface IDocumentRepository
{
    Task<List<Document>> GetByProjectIdAsync(Guid projectId, CancellationToken ct = default);
    Task<Document?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Update(Document document, CancellationToken ct = default);
    Task AddAsync(Document document, CancellationToken ct = default);
    Task DeleteAsync(Document document, CancellationToken ct = default);
}