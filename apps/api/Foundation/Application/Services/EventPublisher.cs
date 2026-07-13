using Application.Abstractions;
using Domain.Abstractions;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Services;

internal sealed class EventPublisher : IEventPublisher
{
    private readonly IServiceProvider _serviceProvider;

    public EventPublisher(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task PublishAsync<TEvent>(TEvent @event, CancellationToken ct = default) where TEvent : class, IEvent
    {
        // Capture incoming event identifiers to form the next Causation point
        EventContextAccessor.CorrelationId = @event.Metadata.CorrelationId;
        EventContextAccessor.CausationId = @event.Metadata.EventId;

        var handlers = _serviceProvider.GetServices<IEventHandler<TEvent>>();

        // Execute tracking mutations in parallel across module implementations
        var tasks = handlers.Select(handler => handler.HandleAsync(@event, ct));

        await Task.WhenAll(tasks);
    }
}