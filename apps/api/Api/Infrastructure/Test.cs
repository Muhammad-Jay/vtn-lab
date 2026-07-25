// using System.Security.Claims;
// using System.Text.Encodings.Web;
// using Microsoft.AspNetCore.Authentication;
// using Microsoft.Extensions.Options;
//
// namespace Api.Infrastructure;
//
// public class TestAuthOptions : AuthenticationSchemeOptions { }
//
// public class TestAuthHandler : AuthenticationHandler<TestAuthOptions>
// {
//     public TestAuthHandler(
//         IOptionsMonitor<TestAuthOptions> options,
//         ILoggerFactory logger,
//         UrlEncoder encoder) : base(options, logger, encoder)
//     {
//     }
//
//     protected override Task<AuthenticateResult> HandleAuthenticateAsync()
//     {
//         Console.WriteLine($"Authenticating Request...");
//         
//         // 1. Check if our custom test header exists in the Insomnia request
//         if (!Request.Headers.TryGetValue("X-Test-User-Id", out var userIdValues))
//         {
//             // No user ID provided? Return unauthenticated (anonymous user)
//             return Task.FromResult(AuthenticateResult.NoResult());
//         }
//
//         var userId = userIdValues.ToString();
//
//         if (string.IsNullOrWhiteSpace(userId))
//         {
//             return Task.FromResult(AuthenticateResult.Fail("Empty User ID passed."));
//         }
//
//         // 2. Construct the security Claims array. 
//         // We map our string ID to the standard NameIdentifier claim type (sub)
//         var claims = new[] 
//         {
//             new Claim(ClaimTypes.NameIdentifier, userId),
//             new Claim(ClaimTypes.Email, $"{userId}@test-vtn.local")
//         };
//
//         // 3. Wrap claims into an Identity state machine labeled with our scheme name
//         var identity = new ClaimsIdentity(claims, Scheme.Name);
//         var principal = new ClaimsPrincipal(identity);
//         var ticket = new AuthenticationTicket(principal, Scheme.Name);
//
//         // Success! The user is now officially recognized by the API engine
//         return Task.FromResult(AuthenticateResult.Success(ticket));
//     }
// }