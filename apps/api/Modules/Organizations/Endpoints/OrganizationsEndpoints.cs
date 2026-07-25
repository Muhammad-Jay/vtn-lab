using System.Security.Claims;
using Application.Security;
using Domain.Entity.MembershipRole;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Organizations.Application.Queries;
using Organizations.Application.Queries.DTOs;
using Organizations.Application.Services;
using Organizations.Contracts;

namespace Organizations.Endpoints;

public static class OrganizationEndpoints
{
    public static RouteGroupBuilder MapOrganizations(this RouteGroupBuilder group)
    {
        var orgs = group.MapGroup("/organizations");

        orgs.MapGet("/", async (
            ClaimsPrincipal user,
            Queries queries,
            CancellationToken cancellationToken,
            [FromQuery] OrganizationMembershipRole? role,
            [FromQuery] bool detailed = false,
            [FromQuery] int limit = 3) => 
        {
            var userId = user.GetUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            // Capture execution parameters uniformly
            var query = new GetUserOrganizationsQuery(userId, role, detailed, limit);
            var response = await queries.GetUserOrganizations(query, cancellationToken);

            return Results.Ok(response);
        });

        orgs.MapGet("/{organizationId:guid}", async (
            Guid organizationId,
            OrganizationService service,
            CancellationToken cancellationToken) =>
        {
            var org = await service.GetByIdAsync(organizationId, cancellationToken);
            
            var response = new OrganizationResponse(
                org.Id,
                org.Name,
                org.Slug,
                org.Description,
                org.LogoUrl,
                org.CreatedAt,
                org.UpdatedAt);

            return Results.Ok(response);
        });

        orgs.MapPost("/", async (
            ClaimsPrincipal user,
            CreateOrganizationRequest request,
            OrganizationService service,
            CancellationToken cancellationToken) =>
        {
            var userId = user.GetUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Results.Unauthorized();
            }

            Console.WriteLine($">>>>>>>>>>>>>>>  Received Create Request {userId}");
            var newOrg = await service.Create(userId, request.Name, request.Description, cancellationToken);
            return Results.Created($"/api/v1/organizations/{newOrg.Id}", newOrg);
        });

        orgs.MapPatch("/{organizationId:guid}", async (
            Guid organizationId,
            UpdateOrganizationRequest request,
            OrganizationService service,
            CancellationToken cancellationToken) =>
        {
            await service.UpdateAsync(organizationId, request.Name, request.Description, cancellationToken);
            return Results.NoContent();
        });

        orgs.MapDelete("/{organizationId:guid}", async (
            Guid organizationId,
            OrganizationService service,
            CancellationToken cancellationToken) =>
        {
            await service.DeleteAsync(organizationId, cancellationToken);
            return Results.NoContent();
        });

        return group;
    }
}