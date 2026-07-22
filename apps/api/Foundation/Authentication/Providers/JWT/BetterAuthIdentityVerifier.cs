using Domain.Abstractions;
using Microsoft.IdentityModel.JsonWebTokens;

namespace Authentication.Providers.Jwt;

/// <summary>
/// Verifies the identity of a user by parsing and extracting claims from a Better Auth JSON Web Token (JWT).
/// </summary>
public class BetterAuthIdentityVerifier : IIdentityVerifier
{
    /// <summary>
    /// Extracts the unique user identifier from the provided JWT subject claim.
    /// </summary>
    /// <param name="token">The raw JWT string passed from the client application.</param>
    /// <param name="userId">The extracted user identifier if verification succeeds; otherwise, an empty string.</param>
    /// <returns>True if the token is readable and contains a valid subject claim; otherwise, false.</returns>
    public bool VerifyIdentity(string token, out string userId)
    {
        userId = string.Empty;

        if (string.IsNullOrWhiteSpace(token))
        {
            return false;
        }

        try
        {
            var handler = new JsonWebTokenHandler();
            
            if (!handler.CanReadToken(token))
            {
                return false;
            }

            // Parses the token layout. Cryptographic validation is executed upstream by the authentication middleware.
            var jwtToken = handler.ReadJsonWebToken(token);
            var subClaim = jwtToken.Subject;

            if (!string.IsNullOrEmpty(subClaim))
            {
                userId = subClaim;
                return true;
            }
        }
        catch
        {
            // Suppress exceptions to prevent revealing internal validation mechanics.
        }

        return false;
    }
}