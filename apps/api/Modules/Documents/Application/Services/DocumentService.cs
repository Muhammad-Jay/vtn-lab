using Documents.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;

namespace Documents.Application.Services;

public sealed class DocumentService
{
    private readonly IDocumentRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public DocumentService(IDocumentRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Guid> CreateAsync(
        Guid projectId, 
        string authorId, 
        string title, 
        string contentJson, 
        CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ValidationException("Document title cannot be empty.");

        var document = new Document(projectId, authorId, title, contentJson);

        await _repository.AddAsync(document, ct);
        await _unitOfWork.SaveChangesAsync(ct);

        return document.Id;
    }

    public async Task<Document> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var doc = await _repository.GetByIdAsync(id, ct);
        
        if (doc is null)
            throw new NotFoundException(nameof(Document), id);

        return doc;
    }

    public async Task UpdateAsync(Guid id, string title, string contentJson, CancellationToken ct = default)
    {
        var doc = await GetByIdAsync(id, ct);

        doc.Update(title, contentJson);

        _repository.Update(doc);
        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var doc = await GetByIdAsync(id, ct);

        doc.SoftDelete();

        _repository.DeleteAsync(doc);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}