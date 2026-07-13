using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Activities.Application.Services;
using Activities.Contracts;

namespace Activities.Endpoints;

public static class ActivityEndpoints
{
    public static RouteGroupBuilder MapActivities(this RouteGroupBuilder group)
    {
        group.MapGet("/organizations/{organizationId:guid}/activities", async (
            Guid organizationId,
            [AsParameters] GetActivitiesQuery query,
            ActivityService service,
            CancellationToken cancellationToken) =>
        {
            var activities = await service.GetOrganizationHistoryAsync(organizationId, query.Limit, cancellationToken);

            var response = activities.Select(activity => new ActivityResponse(
                activity.Id,
                activity.OrganizationId,
                activity.ProjectId,
                activity.ActorId,
                activity.Type,
                activity.Description,
                activity.MetadataJson,
                activity.CreatedAt));

            return Results.Ok(response);
        });

        group.MapGet("/projects/{projectId:guid}/activities", async (
            Guid projectId,
            [AsParameters] GetActivitiesQuery query,
            ActivityService service,
            CancellationToken cancellationToken) =>
        {
            var activities = await service.GetProjectHistoryAsync(projectId, query.Limit, cancellationToken);

            var response = activities.Select(activity => new ActivityResponse(
                activity.Id,
                activity.OrganizationId,
                activity.ProjectId,
                activity.ActorId,
                activity.Type,
                activity.Description,
                activity.MetadataJson,
                activity.CreatedAt));

            return Results.Ok(response);
        });

        return group;
    }
}