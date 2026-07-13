using Microsoft.EntityFrameworkCore;
using Users.Application.Services;
using Users.Domain;

namespace Infrastructure.Repositories;

internal sealed class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _db;

    public UserRepository(ApplicationDbContext db) => _db = db;

    public async Task<User?> GetByIdAsync(string id, CancellationToken ct = default)
    {
        return await _db.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Id == id, ct);
    }

    public User Add(User user)
    {
        _db.Users.Add(user);
        return user;
    }

    public async Task UpdateAsync(User user, CancellationToken ct = default)
    {
        _db.Users.Update(user);
    }
}