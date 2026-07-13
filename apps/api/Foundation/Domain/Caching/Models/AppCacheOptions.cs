namespace Domain.Caching.Models;

public sealed record AppCacheOptions
{
    public TimeSpan AbsoluteExpiration { get; init; } = TimeSpan.FromMinutes(5);
    public TimeSpan? SlidingExpiration { get; init; }
    
    // Invalidation tags allow grouping keys together (e.g., "user_123")
    public List<string> Tags { get; init; } = new();

    public static AppCacheOptions Default => new();
}