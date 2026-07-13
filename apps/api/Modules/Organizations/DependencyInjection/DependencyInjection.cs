using Microsoft.Extensions.DependencyInjection;
using Organizations.Application.Queries;
using Organizations.Application.Services;
using Organizations.Infrastructure;

namespace Organizations.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddOrganizations(
        this IServiceCollection services)
    {
        services.AddScoped<OrganizationService>();
        services.AddScoped<Queries>();

        return services;
    }
}