using Domain.Contracts;

namespace Domain.Abstractions;

public interface IEvent
{
    // Every event carries metadata natively for tracking and observability
    EventMetadata Metadata { get; }
}