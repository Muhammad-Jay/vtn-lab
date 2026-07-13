using Users.Domain;

namespace Users.Application.Services;

public interface IUserRepository
{
    Task<User?> GetByIdAsync(string id, CancellationToken ct = default);
    User Add(User user);
    Task UpdateAsync(User user, CancellationToken ct = default);
}