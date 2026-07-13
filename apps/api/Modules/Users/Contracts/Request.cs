namespace Users.Contracts;

public sealed record UpdateUserRequest(
    string? Name, 
    string? AvatarUrl);