namespace Users.Domain;

public sealed class User
{
    public string Id { get; private set; } = default!; 
    public string Name { get; private set; } = default!; 
    public string Email { get; private set; } = default!; 
    public bool EmailVerified { get; private set; } 
    public string? Image { get; private set; }
    
    /* Platform Profile */
    public string? DisplayName { get; private set; }
    public string? Username { get; private set; }
    public string Locale { get; private set; } = default!;
    public string TimeZone { get; private set; } = default!;
    
    /* Platform State */
    public bool OnboardingCompleted { get; private set; }
    public bool IsActive { get; private set; }
    public string? LastOrganizationId { get; private set; } // Matches Drizzle text
    public DateTimeOffset? LastSeenAt { get; private set; }
    public DateTimeOffset? DeletedAt { get; private set; }
    
    /* Audit */
    public DateTimeOffset CreatedAt { get; private set; }
    public DateTimeOffset UpdatedAt { get; private set; }
    
    private User() {}
    public User(string id, string? name, string? avatarUrl)
    {
        Id = id;
        Name = name;
        Image = avatarUrl;
        CreatedAt = DateTimeOffset.UtcNow;
        UpdatedAt = DateTimeOffset.UtcNow;
    }

    public void UpdateProfile(string? name, string? avatarUrl)
    {
        Name = name;
        Image = avatarUrl;
        UpdatedAt = DateTimeOffset.UtcNow;
    }
}