namespace Application.Exceptions;

// Used when a resource (e.g., Organization, Project) is not found
public class NotFoundException : CustomException
{
    public NotFoundException(string name, object key) 
        : base($"Entity '{name}' with key '{key}' was not found.") { }
}

// Used when a business rule is violated (e.g., duplicate slug)
public class ConflictException : CustomException
{
    public ConflictException(string message) : base(message) { }
}

// Used for input validation errors
public class ValidationException : CustomException
{
    public ValidationException(string message) : base(message) { }
}