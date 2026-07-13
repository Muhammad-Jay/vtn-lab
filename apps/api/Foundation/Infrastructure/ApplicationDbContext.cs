using Activities.Domain;
using Billing.Domain;
using Documents.Domain;
using Foundation.Application.Abstractions;
using Integrations.Domain;
using Members.Domain;
using Microsoft.EntityFrameworkCore;
using Organizations.Domain;
using Projects.Domain;
using Users.Domain;
using Users.Infrastructure;

namespace Infrastructure;

public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Organization> Organizations => Set<Organization>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<User> Users => Set<User>();
    public DbSet<Membership> Memberships => Set<Membership>();
    public DbSet<Document> Documents => Set<Document>();
    public DbSet<Integration> Integrations => Set<Integration>();
    public DbSet<ProjectIntegration> ProjectIntegrations => Set<ProjectIntegration>();
    public DbSet<Activity> Activities => Set<Activity>();
    public DbSet<BillingRecord> BillingRecords => Set<BillingRecord>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // =========================================================================
        // MODULE ENTITY CONFIGURATION DISCOVERY
        // =========================================================================
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Organizations.Infrastructure.OrganizationConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Projects.Infrastructure.ProjectConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Members.Infrastructure.MembershipConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Documents.Infrastructure.DocumentConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Integrations.Infrastructure.IntegrationConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Activities.Infrastructure.ActivityConfiguration).Assembly);
        // modelBuilder.ApplyConfigurationsFromAssembly(typeof(Billing.Infrastructure.BillingConfiguration).Assembly);
        
        base.OnModelCreating(modelBuilder);

        // =========================================================================
        // CROSS-MODULE SHADOW RELATIONSHIPS (REFERENTIAL INTEGRITY CORRELATION)
        // =========================================================================

        // --- Projects Module Relations ---
        modelBuilder.Entity<Project>()
            .HasOne<Organization>() 
            .WithMany()             
            .HasForeignKey(p => p.OrganizationId)
            .OnDelete(DeleteBehavior.Cascade);

        // --- Members Module Relations ---
        modelBuilder.Entity<Membership>()
            .HasOne<User>()
            .WithMany()
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        modelBuilder.Entity<Membership>()
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