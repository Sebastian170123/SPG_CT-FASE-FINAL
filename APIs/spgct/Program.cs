using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using spgct.Models;
using spgct.Services;
using spgct.Repositories;  // Agregar el espacio de nombres de TokendValidator
using System.Text;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);
var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

builder.Configuration.AddJsonFile($"appsettings.{environment}.json", optional: true, reloadOnChange: true);

// Agregar configuración de settings
builder.Services.Configure<SpgctSettings>(builder.Configuration.GetSection("SpgctSettings"));
builder.Services.AddSingleton<ISpgctSettings>(d => d.GetRequiredService<IOptions<SpgctSettings>>().Value);
builder.Services.AddSingleton<ProductorService>();
builder.Services.AddScoped<TokendValidator>();  // Registrar TokendValidator como servicio
builder.Services.AddControllers();

// Obtener la clave secreta desde appsettings.json
var secretKey = builder.Configuration["settings:secretkey"];
var key = Encoding.UTF8.GetBytes(secretKey);

// Configuración de autenticación JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (token != null)
            {
                // Usar TokendValidator para validar el token
                var tokenValidator = context.HttpContext.RequestServices.GetRequiredService<TokendValidator>();
                var claimsPrincipal = tokenValidator.ValidateToken(token);

                if (claimsPrincipal != null)
                {
                    context.Principal = claimsPrincipal;
                }
                else
                {
                    context.Fail("Invalid token");
                }
            }
            return Task.CompletedTask;
        }
    };

    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,  // Configura según tu necesidad
        ValidateAudience = false, // Configura según tu necesidad
        ValidateLifetime = true, // Asegúrate de que el token no haya expirado
        ValidateIssuerSigningKey = true, // Valida que la clave de firma sea correcta
        IssuerSigningKey = new SymmetricSecurityKey(key), // Usar la clave secreta desde appsettings.json
        ClockSkew = TimeSpan.Zero // Reduce el margen de tiempo permitido entre servidores
    };
});

// Swagger Configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    // Configuración del esquema de seguridad para JWT
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

// Configuración de CORS
builder.Services
    .AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
        {
            builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        });
    });

var app = builder.Build();

// Configurar el pipeline de solicitudes HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();  // Activa la autenticación JWT
app.UseAuthorization();   // Habilita la autorización para validar el acceso

app.MapControllers();
app.UseCors("AllowAll");

app.Run();