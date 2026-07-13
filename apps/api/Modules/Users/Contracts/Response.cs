namespace Users.Contracts;

public sealed record UserResponse(
    string Id,
    string Email,
    string? Name,
    string? AvatarUrl,
    DateTime CreatedAt,
    DateTime UpdatedAt);