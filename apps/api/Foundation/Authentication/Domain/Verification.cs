namespace Authentication.Domain;

public sealed class Verification
{
    public string Id { get; init; } = string.Empty;
    public string Identifier { get; init; } = string.Empty;
    public string Value { get; init; } = string.Empty;
    public DateTime ExpiresAt { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    private Verification() { }
}