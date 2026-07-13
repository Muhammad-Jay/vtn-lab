namespace Members.Contracts;

public sealed record InviteMemberRequest(
    string UserId, 
    int Role);

public sealed record UpdateMemberRoleRequest(
    int Role, bool IsActive);