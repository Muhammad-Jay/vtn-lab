using Documents.Domain;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Documents.Infrastructure;

public sealed class DocumentConfiguration : IEntityTypeConfiguration<Document>
{
    public void Configure(EntityTypeBuilder<Document> builder)
    {
        builder.ToTable("documents", "documents");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.AuthorId)
            .HasMaxLength(128)
            .IsRequired();

        builder.Property(x => x.Title)
            .HasMaxLength(250)
            .IsRequired();

        builder.Property(x => x.ContentJson)
            .HasColumnType("jsonb")
            .IsRequired();

        builder.HasIndex(x => x.ProjectId);

        builder.HasIndex(x => x.AuthorId);

        builder.HasQueryFilter(x => x.DeletedAt == null);

        builder.ConfigureAudit();
    }
}
