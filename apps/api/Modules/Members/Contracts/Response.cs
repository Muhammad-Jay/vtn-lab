namespace Members.Contracts;

public sealed record MembershipResponse(
    Guid Id,
    Guid OrganizationId,
    string UserId,
    int Role,
    bool IsActive);