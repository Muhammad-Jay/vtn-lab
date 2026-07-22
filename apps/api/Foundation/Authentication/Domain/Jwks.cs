namespace Authentication.Domain;

public sealed class Jwks
{
    public string Id { get; init; } = string.Empty;
    public string PublicKey { get; init; } = string.Empty;
    public string PrivateKey { get; init; } = string.Empty;
    public DateTime CreatedAt { get; init; }
    public DateTime? ExpiresAt { get; init; }

    private Jwks() { }
}