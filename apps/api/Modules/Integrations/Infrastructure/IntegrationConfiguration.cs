using Domain;
using Integrations.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Integrations.Infrastructure;

public sealed class
    IntegrationConfiguration : IEntityTypeConfiguration<Integration>
{
    public void Configure(EntityTypeBuilder<Integration> builder)
    {
        builder.ToTable("integration", "integration");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Provider)
            .HasConversion<string>()
            .HasMaxLength(32);

        builder.Property(x => x.Status)
            .HasConversion<string>()
            .HasMaxLength(32);

        builder.Property(x => x.ConfigurationJson)
            .HasColumnType("jsonb")
            .IsRequired();

        builder.HasIndex(x => x.OrganizationId);

        builder.HasQueryFilter(x => x.DeletedAt == null);

        builder.ConfigureAudit();
    }

    public sealed class ProjectIntegrationConfiguration : IEntityTypeConfiguration<ProjectIntegration>
    {
        public void Configure(EntityTypeBuilder<ProjectIntegration> builder)
        {
            builder.ToTable(
                "project_integrations",
                "integration");

            builder.HasKey(x => x.Id);

            builder.HasIndex(x => new
                {
                    x.ProjectId,
                    x.IntegrationId
                })
                .IsUnique();

            builder.HasIndex(x => x.ProjectId);

            builder.HasIndex(x => x.IntegrationId);
        }
    }
}