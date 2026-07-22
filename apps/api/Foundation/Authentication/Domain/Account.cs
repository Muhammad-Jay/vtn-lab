namespace Authentication.Domain;

public sealed class Account
{
    public string Id { get; init; } = string.Empty;
    public string UserId { get; init; } = string.Empty; // ◄ Boundary Link
    public string AccountId { get; init; } = string.Empty;
    public string ProviderId { get; init; } = string.Empty;
    public string? AccessToken { get; init; }
    public string? RefreshToken { get; init; }
    public string? IdToken { get; init; }
    public DateTime? AccessTokenExpiresAt { get; init; }
    public DateTime? RefreshTokenExpiresAt { get; init; }
    public string? Scope { get; init; }
    public string? Password { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    private Account() { }
}