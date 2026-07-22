using Cache.DependencyInjection;
using Activities.DependencyInjection;
using Activities.Endpoints;
using Api.Infrastructure;
using API.Middleware;
using Application;
using Authentication.DependencyInjection;
using Billing.DependencyInjection;
using Billing.Endpoints;
using Documents.DependencyInjection;
using Documents.Endpoints;
using Infrastructure;
using Infrastructure.DependencyInjection;
using Integrations.DependencyInjection;
using Integrations.Endpoints;
using Members.DependencyInjection;
using Members.Endpoints;
using Microsoft.EntityFrameworkCore;
using Organizations.DependencyInjection;
using Organizations.Endpoints;
using Projects.DependencyInjection;
using Projects.Endpoints;
using Users.DependencyInjection;
using Users.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    
    options.UseNpgsql(
        connectionString);
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalDevPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Matches Frontend Issuer url
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Critical for Better Auth cross-domain cookie lifecycles
    });
});

// Modules Dependency Injections
builder.Services.AddAppCaching(builder.Configuration);
builder.Services.AddInfrastructure();
builder.Services.AddOrganizations();
builder.Services.AddProjects();
builder.Services.AddUsers();
builder.Services.AddMembers();
builder.Services.AddDocuments();
builder.Services.AddIntegrations();
builder.Services.AddActivities();
builder.Services.AddBilling();

builder.Services.AddAppAuthentication(builder.Configuration);

builder.Services.AddCoreEventEngine(
    // Cache System
    typeof(Cache.DependencyInjection.DependencyInjection).Assembly,
    
    // Modules
    typeof(Organizations.DependencyInjection.DependencyInjection).Assembly,
    typeof(Members.DependencyInjection.DependencyInjection).Assembly,
    typeof(Projects.DependencyInjection.DependencyInjection).Assembly,
    typeof(Activities.DependencyInjection.DependencyInjection).Assembly,
    typeof(Billing.DependencyInjection.DependencyInjection).Assembly,
    typeof(Integrations.DependencyInjection.DependencyInjection).Assembly,
    typeof(Documents.DependencyInjection.DependencyInjection).Assembly,
    typeof(Users.DependencyInjection.DependencyInjection).Assembly
);

// builder.Services.AddAuthentication("TestAuthScheme")
//     .AddScheme<TestAuthOptions, TestAuthHandler>("TestAuthScheme", options => { });

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseCors("LocalDevPolicy");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseMiddleware<GlobalExceptionHandler>();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

var apiVersionGroup = app.MapGroup("/api/v1");

apiVersionGroup.RequireAuthorization();

// Module Registrations
apiVersionGroup.MapOrganizations();
apiVersionGroup.MapProjects();
apiVersionGroup.MapUsers();
apiVersionGroup.MapMembers();
apiVersionGroup.MapDocuments();
apiVersionGroup.MapIntegrations();
apiVersionGroup.MapBilling();
apiVersionGroup.MapActivities();

app.Run();
