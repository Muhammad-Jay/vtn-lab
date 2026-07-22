using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Organizations.Domain;

namespace Organizations.Infrastructure;

public sealed class OrganizationConfiguration
    : IEntityTypeConfiguration<Organization>
{
    public void Configure(
        EntityTypeBuilder<Organization> builder)
    {
        builder.ToTable("organization", "organization");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Slug)
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.LogoUrl)
            .HasMaxLength(2048);

        builder.HasIndex(x => x.Slug)
            .IsUnique();

        builder.HasQueryFilter(x => x.DeletedAt == null);

        builder.ConfigureAudit();
    }
}