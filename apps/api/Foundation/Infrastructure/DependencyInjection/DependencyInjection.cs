using Activities.Application.Services;
using Billing.Application.Services;
using Documents.Application.Services;
using Domain.Caching;
using Foundation.Application.Abstractions;
using Infrastructure.Queries.Organization;
using Infrastructure.Repositories;
using Integrations.Application.Services;
using Members.Application.Services;
using Microsoft.Extensions.DependencyInjection;
using Organizations.Application.Queries;
using Organizations.Application.Services;
using Projects.Application.Services;
using Users.Application.Services;

namespace Infrastructure.DependencyInjection;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork>(provider => 
            provider.GetRequiredService<ApplicationDbContext>());
        
        // Repository Registrations
        services.AddScoped<IOrganizationRepository, OrganizationRepository>();
        services.AddScoped<IProjectRepository, ProjectRepository>();
        services.AddScoped<IMembershipRepository, MembershipRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IDocumentRepository, DocumentRepository>();
        services.AddScoped<IIntegrationRepository, IntegrationRepository>();
        services.AddScoped<IProjectIntegrationRepository, ProjectIntegrationRepository>();
        services.AddScoped<IActivityRepository, ActivityRepository>();
        services.AddScoped<IBillingRepository, BillingRepository>();
        
        // Queries Registrations
        services.AddScoped<OrganizationQueries>();
        
        services.AddScoped<IOrganizationQueries>(provider => 
            new CachedOrganizationQueries(
                provider.GetRequiredService<OrganizationQueries>(), // Database Engine
                provider.GetRequiredService<IAppCacheService>(),    // Cache Engine
                provider.GetRequiredService<ICacheKeyRegistry>()    // String Registry
            ));
        
        return services;
    }
}