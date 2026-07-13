using Domain.Abstractions;
using Authentication.Providers.Clerk;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Authentication.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddAppAuthentication(
        this IServiceCollection services, 
        IConfiguration configuration)
    {
        // 1. Determine which identity provider strategy to use from configuration
        string providerType = configuration["Authentication:Provider"] ?? "Clerk";

        switch (providerType.ToUpperInvariant())
        {
            case "CLERK":
                var clerkOptions = new ClerkOptions
                {
                    Authority = configuration["Authentication:Clerk:Authority"] 
                                ?? throw new InvalidOperationException("Clerk Authority URL is missing."),
                    Audience = configuration["Authentication:Clerk:Audience"] ?? string.Empty
                };

                services.AddSingleton(clerkOptions);
                services.AddSingleton<IIdentityVerifier, ClerkIdentityVerifier>();
                break;

            case "AUTH0":
                // Future Hook:
                // services.AddSingleton<IIdentityVerifier, Auth0IdentityVerifier>();
                throw new NotImplementedException("Auth0 authentication engine provider is not implemented yet.");

            default:
                throw new InvalidOperationException($"Authentication provider strategy '{providerType}' is unrecognized.");
        }

        return services;
    }
}