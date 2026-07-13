namespace Documents.Contracts;

public sealed record DocumentResponse(
    Guid Id,
    Guid ProjectId,
    string AuthorId,
    string Title,
    string ContentJson,
    DateTime CreatedAt,
    DateTime UpdatedAt);