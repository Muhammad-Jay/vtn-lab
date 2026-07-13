using System.Security.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Users.Application.Services;
using Users.Contracts;

namespace Users.Endpoints;

public static class UserEndpoints
{
    public static RouteGroupBuilder MapUsers(this RouteGroupBuilder group)
    {
        group.MapGet("/users/me", async (
            ClaimsPrincipal principal,
            UserService service,
            CancellationToken cancellationToken) =>
        {
            var userId = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            var user = await service.GetByIdAsync(userId, cancellationToken);

            var response = new UserResponse(
                user.Id,
                user.Email,
                user.Name,
                user.AvatarUrl,
                user.CreatedAt,
                user.UpdatedAt);

            return Results.Ok(response);
        });

        group.MapPatch("/users/me", async (
            ClaimsPrincipal principal,
            UpdateUserRequest request,
            UserService service,
            CancellationToken cancellationToken) =>
        {
            var userId = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            var user = await service.GetByIdAsync(userId, cancellationToken);

            await service.UpsertFromWebhookAsync(
                user.Id,
                user.Email,
                request.Name,
                request.AvatarUrl,
                cancellationToken);

            return Results.NoContent();
        });

        return group;
    }
}