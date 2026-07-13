using Projects.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;

namespace Projects.Application.Services;

public sealed class ProjectService
{
    private readonly IProjectRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public ProjectService(IProjectRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Guid> CreateAsync(
        Guid organizationId, 
        string name, 
        string? description, 
        CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ValidationException("Project name cannot be empty.");

        var slug = name.Trim().ToLower().Replace(" ", "-");

        if (await _repository.SlugExistsAsync(slug, organizationId, ct))
            throw new ConflictException($"A project with the slug '{slug}' already exists in this organization.");

        var project = new Project(organizationId, name, slug, description);

        await _repository.AddAsync(project, ct);
        await _unitOfWork.SaveChangesAsync(ct);

        return project.Id;
    }

    public async Task<Project> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var project = await _repository.GetByIdAsync(id, ct);
        
        if (project is null)
            throw new NotFoundException(nameof(Project), id);

        return project;
    }

    public async Task<List<Project>> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        return await _repository.GetByOrganizationIdAsync(organizationId, ct);
    }

    public async Task UpdateAsync(Guid id, string name, string? description, CancellationToken ct = default)
    {
        var project = await _repository.GetByIdAsync(id, ct);
        
        if (project is null)
            throw new NotFoundException(nameof(Project), id);

        project.Update(name, description);

        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var project = await _repository.GetByIdAsync(id, ct);
        
        if (project is null)
            throw new NotFoundException(nameof(Project), id);

        project.SoftDelete();

        await _repository.DeleteAsync(project);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}