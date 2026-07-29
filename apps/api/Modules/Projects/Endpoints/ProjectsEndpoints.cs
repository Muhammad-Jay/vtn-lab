using System.Security.Claims;
using Application.Security;
using Domain.Entity.MembershipRole;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Projects.Application.Queries;
using Projects.Application.Queries.DTOs;
using Projects.Application.Services;
using Projects.Contracts;

namespace Projects.Endpoints;

public static class ProjectEndpoints
{
    public static RouteGroupBuilder MapProjects(this RouteGroupBuilder group)
    {
        group.MapGet("/organizations/{organizationId:guid}/projects", async (
            Guid organizationId,
            ClaimsPrincipal user,
            IProjectQueries queries,
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
            
            var query = new GetOrganizationProjectsQuery(userId, organizationId, role, detailed, limit);

            var response = await queries.GetOrganizationProjects(query, cancellationToken);
            
            return Results.Ok(response.Projects);
        });

        group.MapPost("/organizations/{organizationId:guid}/projects", async (
            Guid organizationId,
            CreateProjectRequest request,
            ProjectService service,
            CancellationToken cancellationToken) =>
        {
            var id = await service.CreateAsync(
                organizationId, 
                request.Name, 
                request.Description, 
                cancellationToken);

            return Results.Created($"/api/v1/projects/{id}", id);
        });

        group.MapGet("/projects/{projectId:guid}", async (
            Guid projectId,
            ProjectService service,
            CancellationToken cancellationToken) =>
        {
            var p = await service.GetByIdAsync(projectId, cancellationToken);

            var response = new ProjectResponse(
                p.Id,
                p.OrganizationId,
                p.Name,
                p.Slug,
                p.Description,
                p.CreatedAt,
                p.UpdatedAt);

            return Results.Ok(response);
        });

        group.MapPatch("/projects/{projectId:guid}", async (
            Guid projectId,
            UpdateProjectRequest request,
            ProjectService service,
            CancellationToken cancellationToken) =>
        {
            await service.UpdateAsync(projectId, request.Name, request.Description, cancellationToken);
            return Results.NoContent();
        });

        group.MapDelete("/projects/{projectId:guid}", async (
            Guid projectId,
            ProjectService service,
            CancellationToken cancellationToken) =>
        {
            await service.DeleteAsync(projectId, cancellationToken);
            return Results.NoContent();
        });

        return group;
    }
}