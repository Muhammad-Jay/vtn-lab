using Billing.Domain;

namespace Billing.Application.Services;

public interface IBillingRepository
{
    Task<BillingRecord?> GetByOrganizationIdAsync(Guid organizationId, CancellationToken ct = default);
    Task AddAsync(BillingRecord billing, CancellationToken ct = default);
    Task UpdateAsync(BillingRecord billing, CancellationToken ct = default);
}