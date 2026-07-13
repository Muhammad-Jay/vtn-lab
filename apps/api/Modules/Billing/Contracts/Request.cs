namespace Billing.Contracts;

public sealed record UpdateBillingRequest(
    string ProviderCustomerId,
    string ProviderSubscriptionId,
    int Status);

public sealed record BillingResponse(
    Guid Id,
    Guid OrganizationId,
    string? ProviderCustomerId,
    string? ProviderSubscriptionId,
    int Status,
    DateTime CreatedAt,
    DateTime UpdatedAt);