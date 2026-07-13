using Billing.Domain;
using Billing.Application.Services;
using Foundation.Application.Abstractions;
using Application.Exceptions;

namespace Billing.Application.Services;

public sealed class BillingService
{
    private readonly IBillingRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public BillingService(IBillingRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task InitializeBillingAsync(Guid organizationId, CancellationToken ct = default)
    {
        // Prevent duplicate billing records
        var existing = await _repository.GetByOrganizationIdAsync(organizationId, ct);
        if (existing is not null) return;

        var record = new BillingRecord(organizationId, BillingStatus.TRIALING);
        await _repository.AddAsync(record, ct);
        await _unitOfWork.SaveChangesAsync(ct);
    }

    public async Task<BillingRecord> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default)
    {
        var record = await _repository.GetByOrganizationIdAsync(organizationId, ct);
        
        if (record is null)
            throw new NotFoundException(nameof(BillingRecord), organizationId);

        return record;
    }

    public async Task SyncSubscriptionAsync(
        Guid organizationId, 
        string customerId, 
        string subscriptionId, 
        BillingStatus status, 
        CancellationToken ct = default)
    {
        var record = await GetByOrganizationIdAsync(organizationId, ct);
        
        record.UpdateSubscription(customerId, subscriptionId, status);

        _repository.UpdateAsync(record);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}