namespace Documents.Contracts;

public sealed record CreateDocumentRequest(
    string Title, 
    string ContentJson);

public sealed record UpdateDocumentRequest(
    string Title, 
    string ContentJson);