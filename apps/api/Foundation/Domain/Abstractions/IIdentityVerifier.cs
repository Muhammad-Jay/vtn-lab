using System.Security.Claims;

namespace Domain.Abstractions;

public interface IIdentityVerifier
{
    /// <summary>
    /// Validates a raw JWT string and converts it into a safe, normalized ClaimsPrincipal.
    /// Returns null if the token is expired, tampered with, or structurally invalid.
    /// </summary>
//     Task<ClaimsPrincipal?> VerifyTokenAsync(string rawToken, CancellationToken ct = default);

    // A simplified contract handling user lookup from extraction layer
    bool VerifyIdentity(string token, out string userId);
}