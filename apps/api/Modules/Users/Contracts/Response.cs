namespace Users.Contracts;

public sealed record UserResponse(
    string Id,
    string Email,
    string? Name,
    string? Image,
    string? DisplayName,
    string? Username,
    DateTimeOffset CreatedAt,
    DateTimeOffset UpdatedAt);