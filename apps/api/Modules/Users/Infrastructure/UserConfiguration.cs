using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Users.Domain;

namespace Users.Infrastructure;

public sealed class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("user", "public", t => t.ExcludeFromMigrations());

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).HasColumnName("id");

        // 2. Explicit column mappings for ALL snake_case Postgres fields
        builder.Property(x => x.Name).HasColumnName("name").IsRequired();
        builder.Property(x => x.Email).HasColumnName("email").IsRequired();
        builder.HasIndex(x => x.Email).IsUnique();

        builder.Property(x => x.EmailVerified).HasColumnName("email_verified");
        builder.Property(x => x.Image).HasColumnName("image");

        builder.Property(x => x.DisplayName).HasColumnName("display_name");
        builder.Property(x => x.Username).HasColumnName("username");
        builder.HasIndex(x => x.Username).IsUnique();

        builder.Property(x => x.Locale).HasColumnName("locale").HasDefaultValue("en");
        builder.Property(x => x.TimeZone).HasColumnName("time_zone").HasDefaultValue("UTC");

        builder.Property(x => x.OnboardingCompleted).HasColumnName("onboarding_completed").HasDefaultValue(false);
        builder.Property(x => x.IsActive).HasColumnName("is_active").HasDefaultValue(true);
        builder.Property(x => x.LastOrganizationId).HasColumnName("last_organization_id");

        builder.Property(x => x.LastSeenAt).HasColumnName("last_seen_at");
        builder.Property(x => x.DeletedAt).HasColumnName("deleted_at");
        builder.Property(x => x.CreatedAt).HasColumnName("created_at");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at");
    }
}