namespace Domain.Contracts;

public sealed record EventMetadata(
    Guid EventId,
    Guid CorrelationId,
    Guid CausationId,
    DateTime Timestamp);