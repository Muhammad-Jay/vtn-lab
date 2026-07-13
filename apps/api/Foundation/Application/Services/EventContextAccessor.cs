namespace Application.Services;

public static class EventContextAccessor
{
    private static readonly AsyncLocal<Guid?> _correlationId = new();
    private static readonly AsyncLocal<Guid?> _causationId = new();

    public static Guid CorrelationId
    {
        get => _correlationId.Value ??= Guid.NewGuid();
        set => _correlationId.Value = value;
    }

    public static Guid CausationId
    {
        get => _causationId.Value ??= Guid.Empty;
        set => _causationId.Value = value;
    }
}