using System.Security.Claims;
using Application.Security;
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
            var userId = principal.GetUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            var user = await service.GetByIdAsync(userId, cancellationToken);
            if (user is null)
            {
                return Results.NotFound();
            }

            var response = new UserResponse(
                user.Id,
                user.Email,
                user.Name,
                user.Image,
                user.DisplayName,
                user.Username,
                user.CreatedAt,
                user.UpdatedAt);

            return Results.Ok(response);
        }).RequireAuthorization();

        group.MapPatch("/users/me", async (
            ClaimsPrincipal principal,
            UpdateUserRequest request,
            UserService service,
            CancellationToken cancellationToken) =>
        {
            var userId = principal.GetUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            var user = await service.GetByIdAsync(userId, cancellationToken);
            if (user is null)
            {
                return Results.NotFound();
            }

            await service.UpdateProfileAsync(
                user.Id,
                request.Name,
                request.Image,
                cancellationToken);

            return Results.NoContent();
        }).RequireAuthorization();

        return group;
    }
}