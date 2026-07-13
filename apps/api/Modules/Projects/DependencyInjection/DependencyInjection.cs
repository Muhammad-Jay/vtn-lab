using Microsoft.Extensions.DependencyInjection;
using Projects.Application.Services;

namespace Projects.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddProjects(
        this IServiceCollection services)
    {
        services.AddScoped<ProjectService>();

        return services;
    }
}