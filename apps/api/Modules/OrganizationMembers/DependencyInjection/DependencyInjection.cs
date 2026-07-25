using OrganizationMembers.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace OrganizationMembers.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddMembers(
        this IServiceCollection services)
    {
        services.AddScoped<MemberService>();

        return services;
    }
}