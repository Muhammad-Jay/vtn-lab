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
    /// Configures JWT Bearer authentication validation mechanics for the host application layer using Better Auth JWKS.
    /// </summary>
    public static IServiceCollection AddAppAuthentication(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var issuer = configuration["Authentication:Jwt:Issuer"]
                     ?? throw new InvalidOperationException("JWT Issuer configuration parameter is missing.");
        var audience = configuration["Authentication:Jwt:Audience"]
                       ?? throw new InvalidOperationException("JWT Audience configuration parameter is missing.");
        var jwksUri = configuration["Authentication:Jwt:JwksUri"]
                      ?? throw new InvalidOperationException("JWT JwksUri configuration parameter is missing.");

        // Register a named HttpClient for fetching JWKS keys efficiently
        services.AddHttpClient("BetterAuthJwks");

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            options.RequireHttpsMetadata = false; // Set to true in Production

            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = issuer,

                ValidateAudience = true,
                ValidAudience = audience,

                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,

                // Maps Better Auth 'sub' claim directly to ClaimTypes.NameIdentifier
                NameClaimType = "sub",
                RoleClaimType = "role",

                // 🔑 DYNAMIC JWKS RESOLVER
                // Pulls public keys dynamically from Better Auth's /api/auth/jwks endpoint
                IssuerSigningKeyResolver = (token, securityToken, kid, validationParameters) =>
                {
                    using var client = new HttpClient();
                    var jwksJson = client.GetStringAsync(jwksUri).GetAwaiter().GetResult();

                    // --- 🚨 ADD THESE DEBUG LOGS ---
                    Console.ForegroundColor = ConsoleColor.Cyan;
                    Console.WriteLine($"\n🔍 JWT HEADER 'kid' (Key ID): {kid}");
                    Console.WriteLine($"🔍 JWKS JSON FROM BETTER AUTH: {jwksJson}\n");
                    Console.ResetColor();
                    // -------------------------------

                    var keySet = new JsonWebKeySet(jwksJson);
                    var keys = keySet.GetSigningKeys();

                    Console.WriteLine($"🔍 KEYS PARSED BY .NET: {keys.Count()}");

                    return keys;
                }
            };

            // options.Events = new JwtBearerEvents
            // {
            //     OnAuthenticationFailed = context =>
            //     {
            //         Console.ForegroundColor = ConsoleColor.Red;
            //         Console.WriteLine($"\n🚨 JWT VALIDATION FAILED: {context.Exception.Message}\n");
            //         Console.ResetColor();
            //         return Task.CompletedTask;
            //     },
            //     OnTokenValidated = context =>
            //     {
            //         Console.ForegroundColor = ConsoleColor.Green;
            //         Console.WriteLine("\n✅ JWT SUCCESSFULLY VALIDATED!\n");
            //         Console.ResetColor();
            //         return Task.CompletedTask;
            //     },
            //     OnChallenge = context =>
            //     {
            //         if (context.AuthenticateFailure != null)
            //         {
            //             Console.ForegroundColor = ConsoleColor.Yellow;
            //             Console.WriteLine($"\n⚠️ AUTH CHALLENGE: {context.Error} - {context.ErrorDescription}\n");
            //             Console.ResetColor();
            //         }
            //         return Task.CompletedTask;
            //     }
            // };
        });

        services.AddSingleton<IIdentityVerifier, BetterAuthIdentityVerifier>();

        return services;
    }
}