using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Projects.Domain;

namespace Projects.Infrastructure;

public sealed class ProjectConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> builder)
    {
        builder.ToTable("project", "project");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Slug)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(2000);

        builder.HasIndex(x => new
            {
                x.OrganizationId,
                x.Slug
            })
            .IsUnique();

        builder.HasIndex(x => x.OrganizationId);

        builder.HasQueryFilter(x => x.DeletedAt == null);

        builder.ConfigureAudit();
    }
}
