using ApiUserSPGCT.Models;
using ApiUserSPGCT.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace ApiUserSPGCT.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UserController : Controller
    {
        private readonly string secretkey;

        public UserController(IConfiguration config)
        {
            secretkey = config.GetSection("settings").GetSection("secretkey").ToString();
        }

        private readonly IUserCollection db = new UserCollection();

        [HttpGet]
        public async Task<IActionResult> GetAllUser()
        {
            var users = await db.GetAllUsers();
            return users != null ? Ok(users) : NotFound("No users found");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserDetails(string id)
        {
            var user = await db.GetUserById(id);
            return user != null ? Ok(user) : NotFound("User not found");
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            if (user == null)
                return BadRequest("User data is null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!IsValidEmail(user.Email))
                ModelState.AddModelError("Email", "El Email no tiene un formato válido");

            if (user.password.Length < 6)
                ModelState.AddModelError("Password", "La contraseña debe tener al menos 6 caracteres");

            if (ModelState.ErrorCount > 0)
                return BadRequest(ModelState);

            await db.InsertUser(user);
            return CreatedAtAction(nameof(GetUserDetails), new { id = user.id.ToString() }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser([FromBody] User user, string id)
        {
            if (user == null)
                return BadRequest("User data is null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!IsValidEmail(user.Email))
                ModelState.AddModelError("Email", "El Email no tiene un formato válido");

            if (user.password.Length < 6)
                ModelState.AddModelError("Password", "La contraseña debe tener al menos 6 caracteres");

            if (ModelState.ErrorCount > 0)
                return BadRequest(ModelState);

            user.id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateUser(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var userExists = await db.GetUserById(id) != null;
            if (!userExists)
                return NotFound("User not found");

            await db.DeleteUser(id);
            return NoContent();
        }

        private bool IsValidEmail(string email)
        {
            var emailRegex = new Regex(@"^[^@\s]+@[^@\s]+\.[^@\s]+$");
            return emailRegex.IsMatch(email);
        }
    }
}
