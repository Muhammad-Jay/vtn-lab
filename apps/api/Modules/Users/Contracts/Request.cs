namespace Users.Contracts;

public sealed record UpdateUserRequest(
    string? Name,
    string? Image,
    string? DisplayName,
    string? Username);