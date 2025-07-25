using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Claims;
using System.Text;

namespace spgct.Repositories
{
    public class TokendValidator
    {

        private readonly string _secretKey;

        // El constructor obtiene la clave secreta de appsettings.json
        public TokendValidator(IConfiguration configuration)
        {
            _secretKey = configuration["settings:secretkey"];  // Obtén la clave secreta desde appsettings.json
        }

        // Método para validar el token JWT
        public ClaimsPrincipal ValidateToken(string token)
        {
            var keyBytes = Encoding.UTF8.GetBytes(_secretKey); // Convierte la clave secreta a bytes
            var tokenHandler = new JwtSecurityTokenHandler();
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false, // Configura según tu necesidad
                ValidateAudience = false, // Configura según tu necesidad
                ValidateLifetime = true, // Asegúrate de que el token no haya expirado
                ValidateIssuerSigningKey = true, // Valida que la clave de firma sea correcta
                IssuerSigningKey = new SymmetricSecurityKey(keyBytes), // La clave usada para firmar el token
                ClockSkew = TimeSpan.Zero // Reduce el margen de tiempo permitido entre servidores
            };

            try
            {
                // Valida el token y devuelve los claims asociados
                var claimsPrincipal = tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);

                // Verifica que el tipo de token sea correcto
                if (validatedToken is JwtSecurityToken jwtToken &&
                    jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                {
                    return claimsPrincipal; // Token válido
                }

                throw new SecurityTokenException("Token inválido");
            }
            catch (Exception ex)
            {
                // Maneja la excepción según tu caso de uso
                Console.WriteLine($"Error al validar el token: {ex.Message}");
                return null; // Token no válido
            }
        }
    }
}
