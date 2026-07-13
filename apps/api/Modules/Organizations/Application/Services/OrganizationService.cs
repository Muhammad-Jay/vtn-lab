using Application.Abstractions;
using Organizations.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;
using Application.Services;
using Domain.Contracts;
using Domain.Contracts.Organizations;

namespace Organizations.Application.Services;

public sealed class OrganizationService
{
    private readonly IOrganizationRepository _repository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IEventPublisher _publisher;

    public OrganizationService(
        IOrganizationRepository repository,
        IUnitOfWork unitOfWork,
        IEventPublisher publisher)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
        _publisher = publisher;
    }

    // Create
    public async Task<Guid> Create(string userId, string name, string description, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ValidationException("Organization name cannot be empty.");

        var slug = GenerateSlug(name);

        if (await _repository.SlugExistsAsync(slug, ct))
            throw new ConflictException($"An organization with the slug '{slug}' already exists.");

        var organization = new Organization(name, slug, description);
        
        _repository.Add(organization);
        
        var metadata = new EventMetadata(
            EventId: Guid.NewGuid(),
            CorrelationId: EventContextAccessor.CorrelationId,
            CausationId: EventContextAccessor.CausationId,
            Timestamp: DateTime.UtcNow);
    
        var eventContract = new OrganizationCreatedEvent(organization.Id, userId, name, metadata);
        
        await _publisher.PublishAsync(eventContract, ct);
        
        await _unitOfWork.SaveChangesAsync(ct);
        
        return organization.Id;
    }

    // Read (Get By Id)
    public async Task<Organization> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var org = await _repository.GetByIdAsync(id, ct);
        
        if (org is null)
            throw new NotFoundException(nameof(Organization), id);

        return org;
    }

    // Read (List All)
    public async Task<List<Organization>> GetAllByOwnerIdAsync(string ownerId, CancellationToken ct = default)
    {
        return await _repository.GetAllAsync(ownerId, ct);
    }

    // Update
    public async Task UpdateAsync(Guid id, string name, string description, CancellationToken ct = default)
    {
        var org = await _repository.GetByIdAsync(id, ct);
        
        if (org is null)
            throw new NotFoundException(nameof(Organization), id);

        // Assuming your Organization domain model has a proper Update method
        org.Update(name, description); 

        _repository.Update(org);
        await _unitOfWork.SaveChangesAsync(ct);
    }

    // Delete (Soft Delete)
    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var org = await _repository.GetByIdAsync(id, ct);
        
        if (org is null)
            throw new NotFoundException(nameof(Organization), id);

        // Trigger domain-level soft delete logic
        org.SoftDelete(); 

        _repository.Update(org); // Marks as modified
        await _unitOfWork.SaveChangesAsync(ct);
    }

    private static string GenerateSlug(string name)
    {
        return name.Trim().ToLower().Replace(" ", "-");
    }
}