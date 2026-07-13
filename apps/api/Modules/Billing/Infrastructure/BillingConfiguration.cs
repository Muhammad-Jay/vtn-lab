using Billing.Domain;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Billing.Infrastructure;

public sealed class BillingConfiguration : IEntityTypeConfiguration<BillingRecord>
{
    public void Configure(EntityTypeBuilder<BillingRecord> builder)
    {
        builder.ToTable(
            "billing_records",
            "billing");
        builder.HasKey(x => x.Id);

        builder.Property(x => x.ProviderCustomerId)
            .HasMaxLength(256);

        builder.Property(x => x.ProviderSubscriptionId)
            .HasMaxLength(256);

        builder.Property(x => x.Status)
            .HasConversion<string>()
            .HasMaxLength(32);

        builder.HasIndex(x => x.OrganizationId)
            .IsUnique();

        builder.ConfigureAudit();
    }
}