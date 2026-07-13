using Activities.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;

namespace Activities.Application.Services;

public sealed class ActivityService
{
    private readonly IActivityRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public ActivityService(
        IActivityRepository repository,
        IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task CreateAsync(
        string actorId,
        Guid organizationId,
        string type,
        string description,
        Guid? projectId = null,
        string? metadataJson = null,
        CancellationToken ct = default)
    {
        // Domain validation
        if (string.IsNullOrWhiteSpace(actorId))
            throw new ValidationException("Actor ID is required for audit logs.");

        if (string.IsNullOrWhiteSpace(type) || string.IsNullOrWhiteSpace(description))
            throw new ValidationException("Activity type and description are required.");

        var activity = new Activity(
            organizationId,
            projectId,
            actorId,
            type,
            description,
            metadataJson);

        await _repository.AddAsync(activity, ct);
        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task<List<Activity>> GetOrganizationHistoryAsync(
        Guid organizationId, 
        int limit = 50, 
        CancellationToken ct = default)
    {
        return await _repository.GetByOrganizationIdAsync(organizationId, limit, ct);
    }

    public async Task<List<Activity>> GetProjectHistoryAsync(
        Guid projectId, 
        int limit = 20, 
        CancellationToken ct = default)
    {
        return await _repository.GetByProjectIdAsync(projectId, limit, ct);
    }
}