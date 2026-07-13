using Integrations.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Integrations.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddIntegrations(
        this IServiceCollection services)
    {
        services.AddScoped<IntegrationService>();

        return services;
    }
}