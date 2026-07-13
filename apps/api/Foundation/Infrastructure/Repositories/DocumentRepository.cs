using Documents.Application.Services;
using Documents.Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

internal sealed class DocumentRepository : IDocumentRepository
{
    private readonly ApplicationDbContext _db;

    public DocumentRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Document>> GetByProjectIdAsync(Guid projectId, CancellationToken ct = default)
    {
        return await _db.Documents
            .AsNoTracking()
            .Where(d => d.ProjectId == projectId && d.DeletedAt == null)
            .OrderByDescending(d => d.UpdatedAt)
            .ToListAsync(ct);
    }

    public async Task<Document?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _db.Documents
            .AsNoTracking()
            .FirstOrDefaultAsync(d => d.Id == id && d.DeletedAt == null, ct);
    }

    public async Task AddAsync(Document document, CancellationToken ct = default)
    {
        await _db.Documents.AddAsync(document, ct);
    }
    
    public void Update(Document document, CancellationToken ct = default)
    {
        _db.Documents.Update(document);
    }

    public async Task DeleteAsync(Document document, CancellationToken ct = default)
    {
        _db.Documents.Update(document);
    }
}