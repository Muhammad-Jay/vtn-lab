namespace Domain.Entity.Billing;

public enum BillingStatus
{
    ACTIVE,
    TRIALING,
    PAST_DUE,
    CANCELED
}