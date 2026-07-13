using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain;

public static class EntityTypeBuilderExtensions
{
    public static void ConfigureAudit<TEntity>(
        this EntityTypeBuilder<TEntity> builder)
        where TEntity : class
    {
        builder.Property("CreatedAt")
            .HasColumnType("timestamptz")
            .IsRequired();

        builder.Property("UpdatedAt")
            .HasColumnType("timestamptz")
            .IsRequired();

        builder.Property("DeletedAt")
            .HasColumnType("timestamptz");
    }
}