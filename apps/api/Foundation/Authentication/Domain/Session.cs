namespace Authentication.Domain;

public sealed class Session
{
    public string Id { get; init; } = string.Empty;
    public string UserId { get; init; } = string.Empty; // ◄ Boundary Link (No User navigation property)
    public string Token { get; init; } = string.Empty;
    public DateTime ExpiresAt { get; init; }
    public string? IpAddress { get; init; }
    public string? UserAgent { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    private Session() { }
}