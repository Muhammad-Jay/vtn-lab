using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Billing.Application.Services;
using Billing.Contracts;
using Billing.Domain;

namespace Billing.Endpoints;

public static class BillingEndpoints
{
    public static RouteGroupBuilder MapBilling(this RouteGroupBuilder group)
    {
        group.MapGet("/organizations/{organizationId:guid}/billing", async (
            Guid organizationId,
            BillingService service,
            CancellationToken cancellationToken) =>
        {
            var record = await service.GetByOrganizationIdAsync(organizationId, cancellationToken);

            var response = new BillingResponse(
                record.Id,
                record.OrganizationId,
                record.ProviderCustomerId,
                record.ProviderSubscriptionId,
                (int)record.Status,
                record.CreatedAt,
                record.UpdatedAt);

            return Results.Ok(response);
        });

        group.MapPatch("/organizations/{organizationId:guid}/billing", async (
            Guid organizationId,
            UpdateBillingRequest request,
            BillingService service,
            CancellationToken cancellationToken) =>
        {
            await service.SyncSubscriptionAsync(
                organizationId,
                request.ProviderCustomerId,
                request.ProviderSubscriptionId,
                (BillingStatus)request.Status,
                cancellationToken);

            return Results.NoContent();
        });

        return group;
    }
}