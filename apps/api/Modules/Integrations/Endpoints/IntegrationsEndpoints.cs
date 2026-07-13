using Domain.Entity.Integration;
using Foundation.Application.Abstractions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Integrations.Application.Services;
using Integrations.Contracts;
using Integrations.Domain;

namespace Integrations.Endpoints;

public static class IntegrationEndpoints
{
    public static RouteGroupBuilder MapIntegrations(this RouteGroupBuilder group)
    {
        group.MapGet("/organizations/{organizationId:guid}/integrations", async (
            Guid organizationId,
            IIntegrationRepository repository,
            CancellationToken cancellationToken) =>
        {
            var integrations = await repository.GetByOrganizationIdAsync(organizationId, cancellationToken);

            var response = integrations.Select(i => new IntegrationResponse(
                i.Id,
                i.OrganizationId,
                (int)i.Provider,
                i.Name,
                (int)i.Status,
                i.ConfigurationJson,
                i.CreatedAt,
                i.UpdatedAt));

            return Results.Ok(response);
        });

        group.MapPost("/organizations/{organizationId:guid}/integrations", async (
            Guid organizationId,
            CreateIntegrationRequest request,
            IntegrationService service,
            CancellationToken cancellationToken) =>
        {
            var id = await service.CreateAsync(
                organizationId,
                (IntegrationProvider)request.Provider,
                request.Name,
                request.ConfigurationJson,
                cancellationToken);

            return Results.Created($"/api/v1/integrations/{id}", id);
        });

        group.MapGet("/integrations/{integrationId:guid}", async (
            Guid integrationId,
            IIntegrationRepository repository,
            CancellationToken cancellationToken) =>
        {
            var i = await repository.GetByIdAsync(integrationId, cancellationToken);
            if (i is null)
            {
                return Results.NotFound();
            }

            var response = new IntegrationResponse(
                i.Id,
                i.OrganizationId,
                (int)i.Provider,
                i.Name,
                (int)i.Status,
                i.ConfigurationJson,
                i.CreatedAt,
                i.UpdatedAt);

            return Results.Ok(response);
        });

        group.MapPost("/integrations/{integrationId:guid}/projects", async (
            Guid integrationId,
            AssociateProjectRequest request,
            IntegrationService service,
            CancellationToken cancellationToken) =>
        {
            await service.AssociateWithProjectAsync(integrationId, request.ProjectId, cancellationToken);
            return Results.Ok();
        });

        group.MapDelete("/integrations/{integrationId:guid}", async (
            Guid integrationId,
            IIntegrationRepository repository,
            IUnitOfWork unitOfWork,
            CancellationToken cancellationToken) =>
        {
            var integration = await repository.GetByIdAsync(integrationId, cancellationToken);
            if (integration is null)
            {
                return Results.NotFound();
            }

            integration.SoftDelete();
            await repository.DeleteAsync(integration, cancellationToken);
            await unitOfWork.SaveChangesAsync(cancellationToken);

            return Results.NoContent();
        });

        return group;
    }
}