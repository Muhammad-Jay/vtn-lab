using Domain.Entity.MembershipRole;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using OrganizationMembers.Application.Services;
using OrganizationMembers.Contracts;

namespace OrganizationMembers.Endpoints;

public static class MemberEndpoints
{
    public static RouteGroupBuilder MapMembers(this RouteGroupBuilder group)
    {
        group.MapGet("/organizations/{organizationId:guid}/members", async (
            Guid organizationId,
            MemberService service,
            CancellationToken cancellationToken) =>
        {
            var memberships = await service.GetMembersByOrganizationIdAsync(organizationId, cancellationToken);

            var response = memberships.Select(m => new MembershipResponse(
                m.Id,
                m.OrganizationId,
                m.UserId,
                (int)m.Role,
                m.IsActive));

            return Results.Ok(response);
        });

        group.MapPost("/organizations/{organizationId:guid}/members", async (
            Guid organizationId,
            InviteMemberRequest request,
            MemberService service,
            CancellationToken cancellationToken) =>
        {
            var id = await service.InviteMemberAsync(
                organizationId,
                request.UserId,
                (OrganizationMembershipRole)request.Role,
                cancellationToken);

            return Results.Created($"/api/v1/organizations/{organizationId}/members/{id}", id);
        });

        group.MapPatch("/organizations/{organizationId:guid}/members/{memberId:guid}", async (
            Guid organizationId,
            Guid memberId,
            UpdateMemberRoleRequest request,
            MemberService service,
            CancellationToken cancellationToken) =>
        {
            await service.UpdateRoleAsync(memberId, (OrganizationMembershipRole)request.Role, request.IsActive, cancellationToken);
            return Results.NoContent();
        });

        group.MapDelete("/organizations/{organizationId:guid}/members/{memberId:guid}", async (
            Guid organizationId,
            Guid memberId,
            MemberService service,
            CancellationToken cancellationToken) =>
        {
            await service.RemoveMemberAsync(memberId, cancellationToken);
            return Results.NoContent();
        });

        return group;
    }
}