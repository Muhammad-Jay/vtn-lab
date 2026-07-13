using Documents.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Documents.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddDocuments(
        this IServiceCollection services)
    {
        services.AddScoped<DocumentService>();

        return services;
    }
}