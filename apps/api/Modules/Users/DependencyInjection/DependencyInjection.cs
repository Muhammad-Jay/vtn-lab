using Users.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Users.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddUsers(
        this IServiceCollection services)
    {
        services.AddScoped<UserService>();

        return services;
    }
}