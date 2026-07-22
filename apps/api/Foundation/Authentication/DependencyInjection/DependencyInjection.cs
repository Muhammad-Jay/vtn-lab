using System.Text;
using Authentication.Providers.Jwt;
using Domain.Abstractions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Authentication.DependencyInjection;

/// <summary>
/// Provides extension methods to register identity validation systems within the service container.
/// </summary>
public static class DependencyInjection
{
    /// <summary>
    /// Configures JWT Bearer authentication validation mechanics for the host application layer.
    /// </summary>
    /// <param name="services">The core service collection instance from the application builder.</param>
    /// <param name="configuration">The configuration provider mapping host parameters.</param>
    /// <returns>The updated service collection instance.</returns>
    public static IServiceCollection AddAppAuthentication(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var issuer = configuration["Authentication:Jwt:Issuer"]
                     ?? throw new InvalidOperationException("JWT Issuer configuration parameter is missing.");
        var audience = configuration["Authentication:Jwt:Audience"]
                       ?? throw new InvalidOperationException("JWT Audience configuration parameter is missing.");
        var secretKey = configuration["Authentication:Jwt:SecretKey"]
                        ?? throw new InvalidOperationException("JWT SecretKey signing wrapper is missing.");

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = issuer,

                ValidateAudience = true,
                ValidAudience = audience,

                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey)),

                ClockSkew = TimeSpan.Zero,
                
                // Maps Better Auth 'sub' identity context keys directly to ClaimTypes.NameIdentifier
                NameClaimType = "sub",
                RoleClaimType = "role" 
            };
        });
        
        services.AddSingleton<IIdentityVerifier, BetterAuthIdentityVerifier>();

        return services;
    }
}
