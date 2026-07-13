namespace Domain;

public abstract class Entity<TId>
{
    public TId Id { get; protected set; } = default!;

    public DateTime? DeletedAt { get; private set; }
    public DateTime CreatedAt { get; protected set; } = DateTime.UtcNow;

    public DateTime UpdatedAt { get; protected set; } = DateTime.UtcNow;
    
    protected void SetUpdated()
    {
        UpdatedAt = DateTime.UtcNow;
    }

    protected void SetDeleted()
    {
        DeletedAt = DateTime.UtcNow;
        SetUpdated();
    }
}