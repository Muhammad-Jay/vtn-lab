using System.Security.Claims;
using Domain.Abstractions;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Authentication.Providers.Clerk;

internal sealed class ClerkIdentityVerifier : IIdentityVerifier
{
    private readonly ClerkOptions _options;
    private readonly ConfigurationManager<OpenIdConnectConfiguration> _configManager;
    private readonly JsonWebTokenHandler _tokenHandler;

    public ClerkIdentityVerifier(ClerkOptions options)
    {
        _options = options;
        _tokenHandler = new JsonWebTokenHandler();
        
        // Dynamically discovers and caches Clerk's public signing keys via standard OIDC metadata (.well-known)
        _configManager = new ConfigurationManager<OpenIdConnectConfiguration>(
            $"{options.Authority.TrimEnd('/')}/.well-known/openid-configuration",
            new OpenIdConnectConfigurationRetriever());
    }

    public async Task<ClaimsPrincipal?> VerifyTokenAsync(string rawToken, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(rawToken)) return null;

        try
        {
            // Fetch cached or fresh OIDC signing keys from Clerk
            var oidcConfig = await _configManager.GetConfigurationAsync(ct);

            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = _options.Authority,
                ValidateAudience = !string.IsNullOrEmpty(_options.Audience),
                ValidAudience = _options.Audience,
                ValidateLifetime = true,
                IssuerSigningKeys = oidcConfig.SigningKeys, // Cryptographic verification keys
                ClockSkew = TimeSpan.FromSeconds(30),
                NameClaimType = "sub" // Standard JWT Subject mapping
            };

            var validationResult = await _tokenHandler.ValidateTokenAsync(rawToken, validationParameters);

            if (!validationResult.IsValid)
            {
                return null;
            }

            // Successfully validated; wrap the identity profile back
            return new ClaimsPrincipal(new ClaimsIdentity(validationResult.ClaimsIdentity.Claims, "Bearer"));
        }
        catch
        {
            // Token verification failed or network timeout fetching keys
            return null;
        }
    }
}