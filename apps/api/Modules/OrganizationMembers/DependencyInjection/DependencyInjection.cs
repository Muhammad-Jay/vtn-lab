using Members.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Members.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddMembers(
        this IServiceCollection services)
    {
        services.AddScoped<MemberService>();

        return services;
    }
}