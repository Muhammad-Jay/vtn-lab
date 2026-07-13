namespace Billing.Domain;

public enum BillingStatus
{
    ACTIVE,
    TRIALING,
    PAST_DUE,
    CANCELED
}