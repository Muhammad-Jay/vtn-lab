namespace Users.Domain;

public sealed class User
{
    public string Id { get; private set; }
    public string Email { get; private set; }
    public string? Name { get; private set; }
    public string? AvatarUrl { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime UpdatedAt { get; private set; }
    
    public DateTime? DeletedAt { get; private set; }
    
    private User() {}
    public User(string id, string email, string? name, string? avatarUrl)
    {
        Id = id;
        Email = email;
        Name = name;
        AvatarUrl = avatarUrl;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = DateTime.UtcNow;
    }

    public void UpdateProfile(string? name, string? avatarUrl)
    {
        Name = name;
        AvatarUrl = avatarUrl;
        UpdatedAt = DateTime.UtcNow;
    }
}