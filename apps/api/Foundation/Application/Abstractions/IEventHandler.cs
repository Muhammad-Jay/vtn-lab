using Domain.Abstractions;

namespace Application.Abstractions;

public interface IEventHandler<in TEvent> where TEvent : class, IEvent
{
    Task HandleAsync(TEvent @event, CancellationToken ct = default);
}