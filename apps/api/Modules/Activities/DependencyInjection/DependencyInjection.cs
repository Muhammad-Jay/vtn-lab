using Activities.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Activities.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddActivities(
        this IServiceCollection services)
    {
        services.AddScoped<ActivityService>();

        return services;
    }
}