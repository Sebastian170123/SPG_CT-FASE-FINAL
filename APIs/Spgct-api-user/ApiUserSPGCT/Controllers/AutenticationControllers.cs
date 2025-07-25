using ApiUserSPGCT.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApiUserSPGCT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly string _secretKey;

        public AuthenticationController(IConfiguration config)
        {
            _secretKey = config.GetSection("settings:secretkey").Value;
        }

        [HttpPost]
        [Route("Validate")]
        public IActionResult Validate([FromBody] User request)
        {
            if (request.Email == "omar@gmail.com" && request.password == "omar123")
            {
                var token = GenerateToken(request.Email);
                return Ok(new { token });
            }
            else
            {
                return Unauthorized(new { token = "" });
            }
        }

        private string GenerateToken(string email)
        {
            var keyBytes = Encoding.ASCII.GetBytes(_secretKey);
            var claims = new ClaimsIdentity(new[] {
                new Claim(ClaimTypes.NameIdentifier, email)
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), 
                SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(securityToken);
        }
    }
}
