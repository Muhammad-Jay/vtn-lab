using System.Security.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Documents.Application.Services;
using Documents.Contracts;

namespace Documents.Endpoints;

public static class DocumentEndpoints
{
    public static RouteGroupBuilder MapDocuments(this RouteGroupBuilder group)
    {
        group.MapGet("/projects/{projectId:guid}/documents", async (
            Guid projectId,
            IDocumentRepository repository,
            CancellationToken cancellationToken) =>
        {
            var documents = await repository.GetByProjectIdAsync(projectId, cancellationToken);

            var response = documents.Select(doc => new DocumentResponse(
                doc.Id,
                doc.ProjectId,
                doc.AuthorId,
                doc.Title,
                doc.ContentJson,
                doc.CreatedAt,
                doc.UpdatedAt));

            return Results.Ok(response);
        });

        group.MapPost("/projects/{projectId:guid}/documents", async (
            Guid projectId,
            ClaimsPrincipal user,
            CreateDocumentRequest request,
            DocumentService service,
            CancellationToken cancellationToken) =>
        {
            var authorId = user.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(authorId))
            {
                return Results.Unauthorized();
            }

            var id = await service.CreateAsync(
                projectId, 
                authorId, 
                request.Title, 
                request.ContentJson, 
                cancellationToken);

            return Results.Created($"/api/v1/documents/{id}", id);
        });

        group.MapGet("/documents/{documentId:guid}", async (
            Guid documentId,
            DocumentService service,
            CancellationToken cancellationToken) =>
        {
            var doc = await service.GetByIdAsync(documentId, cancellationToken);

            var response = new DocumentResponse(
                doc.Id,
                doc.ProjectId,
                doc.AuthorId,
                doc.Title,
                doc.ContentJson,
                doc.CreatedAt,
                doc.UpdatedAt);

            return Results.Ok(response);
        });

        group.MapPatch("/documents/{documentId:guid}", async (
            Guid documentId,
            UpdateDocumentRequest request,
            DocumentService service,
            CancellationToken cancellationToken) =>
        {
            await service.UpdateAsync(documentId, request.Title, request.ContentJson, cancellationToken);
            return Results.NoContent();
        });

        group.MapDelete("/documents/{documentId:guid}", async (
            Guid documentId,
            DocumentService service,
            CancellationToken cancellationToken) =>
        {
            await service.DeleteAsync(documentId, cancellationToken);
            return Results.NoContent();
        });

        return group;
    }
}