using ApiUserSPGCT.Models;

namespace ApiUserSPGCT.Repositories
{
    public interface IUserCollection
    {
        Task InsertUser(User user);
        Task UpdateUser(User user);
        Task DeleteUser(string id);

        Task <List<User>> GetAllUsers();
        Task<User> GetUserById(string id);
    }
}
