using Billing.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Billing.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddBilling(
        this IServiceCollection services)
    {
        services.AddScoped<BillingService>();

        return services;
    }
}