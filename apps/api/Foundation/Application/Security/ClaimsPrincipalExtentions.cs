using System.Security.Claims;

namespace Application.Security;

/// <summary>
/// Provides extension methods for interacting with authenticated user identity context.
/// </summary>
public static class ClaimsPrincipalExtensions
{
    /// <summary>
    /// Extracts the unique user identifier from the current authenticated security context.
    /// </summary>
    /// <param name="user">The security principal execution context.</param>
    /// <returns>The User ID string if authenticated; otherwise, string.Empty.</returns>
    public static string GetUserId(this ClaimsPrincipal user)
    {
        return user.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? string.Empty;
    }
}