using Users.Domain;
using Foundation.Application.Abstractions;
using Application.Exceptions;

namespace Users.Application.Services;

public sealed class UserService
{
    private readonly IUserRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public UserService(IUserRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task UpdateProfileAsync(
        string id, 
        string? name, 
        string? image, 
        CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(id))
            throw new ValidationException("User ID from identity provider is required.");

        var existingUser = await _repository.GetByIdAsync(id, ct);

        if (existingUser is null)
        {
            var newUser = new User(id, name, image);
            _repository.Add(newUser);
        }
        else
        {
            existingUser.UpdateProfile(name, image);
            await _repository.UpdateAsync(existingUser, ct);
        }

        await _unitOfWork.SaveChangesAsync(ct);
    }
    
    public async Task<User> AddAsync(User newUser, CancellationToken ct = default)
    {
         var user = _repository.Add(newUser);

         await _unitOfWork.SaveChangesAsync(ct);

         return user;
    }

    public async Task<User> GetByIdAsync(string id, CancellationToken ct = default)
    {
        var user = await _repository.GetByIdAsync(id, ct);
        
        if (user is null)
            throw new NotFoundException(nameof(User), id);

        return user;
    }
}