using Integrations.Domain;
using Integrations.Application.Services;
using Foundation.Application.Abstractions;
using Application.Exceptions;
using Domain.Entity.Integration;

namespace Integrations.Application.Services;

public sealed class IntegrationService
{
    private readonly IIntegrationRepository _repository;
    private readonly IProjectIntegrationRepository _projectIntegrationRepository;
    private readonly IUnitOfWork _unitOfWork;

    public IntegrationService(
        IIntegrationRepository repository, 
        IProjectIntegrationRepository projectIntegrationRepository,
        IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _projectIntegrationRepository = projectIntegrationRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Guid> CreateAsync(
        Guid organizationId, 
        IntegrationProvider provider, 
        string name, 
        string configurationJson, 
        CancellationToken ct = default)
    {
        var integration = new Integration(organizationId, provider, name, configurationJson);
        
        await _repository.AddAsync(integration, ct);
        await _unitOfWork.SaveChangesAsync(ct);
        
        return integration.Id;
    }

    public async Task AssociateWithProjectAsync(Guid integrationId, Guid projectId, CancellationToken ct = default)
    {
        var projectIntegration = new ProjectIntegration(projectId, integrationId);
        // Assuming your DbContext has a ProjectIntegrations DbSet
        await _projectIntegrationRepository.AddAsync(projectIntegration, ct);
        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task UpdateStatusAsync(Guid id, IntegrationStatus status, CancellationToken ct = default)
    {
        var integration = await _repository.GetByIdAsync(id, ct) 
                          ?? throw new NotFoundException(nameof(Integration), id);

        integration.UpdateStatus(status);
        
        _repository.Update(integration);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}