using Domain;

namespace Documents.Domain;

public sealed class Document : Entity<Guid>
{
    public Guid ProjectId { get; private set; }
    public string AuthorId { get; private set; }
    public string Title { get; private set; }
    public string ContentJson { get; private set; }

    private Document() {}
    public Document(Guid projectId, string authorId, string title, string contentJson)
    {
        Id = Guid.NewGuid();
        ProjectId = projectId;
        AuthorId = authorId;
        Title = title;
        ContentJson = contentJson;
    }

    public void Update(string title, string contentJson)
    {
        Title = title;
        ContentJson = contentJson;
        SetUpdated();
    }

    public void SoftDelete()
    {
        SetDeleted();
    }
}