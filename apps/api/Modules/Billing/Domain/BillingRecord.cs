using Domain;

namespace Billing.Domain;

public sealed class BillingRecord : Entity<Guid>
{
    public Guid OrganizationId { get; private set; }
    public string? ProviderCustomerId { get; private set; }
    public string? ProviderSubscriptionId { get; private set; }
    public BillingStatus Status { get; private set; }

    private BillingRecord() {}
    public BillingRecord(Guid organizationId, BillingStatus status)
    {
        Id = Guid.NewGuid();
        OrganizationId = organizationId;
        Status = status;
    }

    public void UpdateSubscription(string customerId, string subscriptionId, BillingStatus status)
    {
        ProviderCustomerId = customerId;
        ProviderSubscriptionId = subscriptionId;
        Status = status;
        SetUpdated();
    }

    public void UpdateStatus(BillingStatus status)
    {
        Status = status;
        SetUpdated();
    }
}