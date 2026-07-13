using Activities.Domain;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Activities.Infrastructure;

public sealed class ActivityConfiguration : IEntityTypeConfiguration<Activity>
{
    public void Configure(EntityTypeBuilder<Activity> builder)
    {
        builder.ToTable("activities", "activity");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.ActorId)
            .HasMaxLength(128);

        builder.Property(x => x.Type)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(1000)
            .IsRequired();

        builder.Property(x => x.MetadataJson)
            .HasColumnType("jsonb");

        builder.HasIndex(x => x.OrganizationId);

        builder.HasIndex(x => x.ProjectId);

        builder.HasIndex(x => x.ActorId);

        // builder.HasIndex(x => x.CreatedAt);

        builder.ConfigureAudit();
    }
}