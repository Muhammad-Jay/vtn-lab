using Activities.Domain;
using Authentication.Domain;
using Authentication.Infrastructure;
using Billing.Domain;
using Documents.Domain;
using Foundation.Application.Abstractions;
using Integrations.Domain;
using Microsoft.EntityFrameworkCore;
using OrganizationMembers.Domain;
using Organizations.Domain;
using Projects.Domain;
using Users.Domain;

namespace Infrastructure;

public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    // --- Users Module ---
    public DbSet<User> Users => Set<User>();
    
    // --- Authentication Module (Better Auth Read-Only Entities) ---
    public DbSet<Session> Sessions => Set<Session>();
    public DbSet<Account> Accounts => Set<Account>();
    public DbSet<Verification> Verifications => Set<Verification>();
    public DbSet<Jwks> Jwks => Set<Jwks>();

    // --- Application Core Modules ---
    public DbSet<Organization> Organizations => Set<Organization>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<OrganizationMember> Memberships => Set<OrganizationMember>();
    public DbSet<Document> Documents => Set<Document>();
    public DbSet<Integration> Integrations => Set<Integration>();
    public DbSet<ProjectIntegration> ProjectIntegrations => Set<ProjectIntegration>();
    public DbSet<Activity> Activities => Set<Activity>();
    public DbSet<BillingRecord> BillingRecords => Set<BillingRecord>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
//         // Forces EF Core migrations to ONLY look at and modify tables inside the "app" schema
//         modelBuilder.HasDefaultSchema("app");

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Authentication.Infrastructure.AccountConfiguration).Assembly);
        
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Users.Infrastructure.UserConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Organizations.Infrastructure.OrganizationConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Projects.Infrastructure.ProjectConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(OrganizationMembers.Infrastructure.MembershipConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Documents.Infrastructure.DocumentConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Integrations.Infrastructure.IntegrationConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Activities.Infrastructure.ActivityConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(Billing.Infrastructure.BillingConfiguration).Assembly);
        
        // =========================================================================
        // CROSS-MODULE SHADOW RELATIONSHIPS (REFERENTIAL INTEGRITY CORRELATION)
        // =========================================================================

        // --- Projects Module Relations ---
        modelBuilder.Entity<Project>()
            .HasOne<Organization>() 
            .WithMany()             
            .HasForeignKey(p => p.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        // --- OrganizationMembers Module Relations ---
        modelBuilder.Entity<OrganizationMember>()
            .HasOne<User>()
            .WithMany()
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<OrganizationMember>()
            .HasOne<Organization>()
            .WithMany()
            .HasForeignKey(m => m.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // --- Integrations Module Relations ---
        modelBuilder.Entity<Integration>()
            .HasOne<Organization>()
            .WithMany()             
            .HasForeignKey(i => i.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<ProjectIntegration>()
            .HasOne<Project>()
            .WithMany()             
            .HasForeignKey(pi => pi.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<ProjectIntegration>()
            .HasOne<Integration>()
            .WithMany()             
            .HasForeignKey(pi => pi.IntegrationId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // --- Documents Module Relations ---
        modelBuilder.Entity<Document>()
            .HasOne<User>()
            .WithMany()             
            .HasForeignKey(d => d.AuthorId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<Document>()
            .HasOne<Project>()
            .WithMany()             
            .HasForeignKey(d => d.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // --- Billing Module Relations ---
        modelBuilder.Entity<BillingRecord>()
            .HasOne<Organization>()
            .WithMany()
            .HasForeignKey(b => b.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
        
        // --- Activities Module Relations ---
        modelBuilder.Entity<Activity>()
            .HasOne<User>()
            .WithMany()             
            .HasForeignKey(a => a.ActorId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<Activity>()
            .HasOne<Project>()
            .WithMany()             
            .HasForeignKey(a => a.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<Activity>()
            .HasOne<Organization>()
            .WithMany()
            .HasForeignKey(a => a.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}