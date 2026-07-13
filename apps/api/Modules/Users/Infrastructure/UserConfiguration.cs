using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Users.Domain;

namespace Users.Infrastructure;

public sealed class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users", "identity");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasMaxLength(128);

        builder.Property(x => x.Email)
            .HasMaxLength(320)
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(200);

        builder.Property(x => x.AvatarUrl)
            .HasMaxLength(2048);

        builder.HasIndex(x => x.Email)
            .IsUnique();

        builder.ConfigureAudit();
    }
}