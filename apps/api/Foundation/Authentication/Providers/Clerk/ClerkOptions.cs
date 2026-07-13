namespace Authentication.Providers.Clerk;

public sealed class ClerkOptions
{
    public string Authority { get; init; } = string.Empty;
    public string Audience { get; init; } = string.Empty;
}