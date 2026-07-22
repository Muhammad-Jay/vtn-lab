using Authentication.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Authentication.Infrastructure;

internal sealed class SessionConfiguration : IEntityTypeConfiguration<Session>
{
    public void Configure(EntityTypeBuilder<Session> builder)
    {
        builder.ToTable("session", "public", t => t.ExcludeFromMigrations());
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.UserId).HasColumnName("user_id").IsRequired();
        builder.Property(x => x.Token).HasColumnName("token").IsRequired();
        builder.Property(x => x.ExpiresAt).HasColumnName("expires_at");
        builder.Property(x => x.IpAddress).HasColumnName("ip_address");
        builder.Property(x => x.UserAgent).HasColumnName("user_agent");
        builder.Property(x => x.CreatedAt).HasColumnName("created_at");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at");

        builder.HasIndex(x => x.Token).IsUnique();
        builder.HasIndex(x => x.UserId); // Matches Drizzle session_userId_idx
    }
}

internal sealed class AccountConfiguration : IEntityTypeConfiguration<Account>
{
    public void Configure(EntityTypeBuilder<Account> builder)
    {
        builder.ToTable("account", "public", t => t.ExcludeFromMigrations());
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.UserId).HasColumnName("user_id").IsRequired();
        builder.Property(x => x.AccountId).HasColumnName("account_id").IsRequired();
        builder.Property(x => x.ProviderId).HasColumnName("provider_id").IsRequired();
        builder.Property(x => x.AccessToken).HasColumnName("access_token");
        builder.Property(x => x.RefreshToken).HasColumnName("refresh_token");
        builder.Property(x => x.IdToken).HasColumnName("id_token");
        builder.Property(x => x.AccessTokenExpiresAt).HasColumnName("access_token_expires_at");
        builder.Property(x => x.RefreshTokenExpiresAt).HasColumnName("refresh_token_expires_at");
        builder.Property(x => x.Scope).HasColumnName("scope");
        builder.Property(x => x.Password).HasColumnName("password");
        builder.Property(x => x.CreatedAt).HasColumnName("created_at");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at");

        builder.HasIndex(x => x.UserId);
    }
}

internal sealed class VerificationConfiguration : IEntityTypeConfiguration<Verification>
{
    public void Configure(EntityTypeBuilder<Verification> builder)
    {
        builder.ToTable("verification", "public", t => t.ExcludeFromMigrations());
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.Identifier).HasColumnName("identifier").IsRequired();
        builder.Property(x => x.Value).HasColumnName("value").IsRequired();
        builder.Property(x => x.ExpiresAt).HasColumnName("expires_at");
        builder.Property(x => x.CreatedAt).HasColumnName("created_at");
        builder.Property(x => x.UpdatedAt).HasColumnName("updated_at");

        builder.HasIndex(x => x.Identifier);
    }
}

internal sealed class JwksConfiguration : IEntityTypeConfiguration<Jwks>
{
    public void Configure(EntityTypeBuilder<Jwks> builder)
    {
        builder.ToTable("jwks", "public", t => t.ExcludeFromMigrations());
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.PublicKey).HasColumnName("public_key").IsRequired();
        // Warning: You probably don't want EF Core tracking the private key in memory,
        // but if it's required to map the table, we include it.
        builder.Property(x => x.PrivateKey).HasColumnName("private_key").IsRequired(); 
        builder.Property(x => x.CreatedAt).HasColumnName("created_at");
        builder.Property(x => x.ExpiresAt).HasColumnName("expires_at");
    }
}