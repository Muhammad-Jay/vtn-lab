using System.Reflection;
using Application.Abstractions;
using Microsoft.Extensions.DependencyInjection;
using Application.Services;

namespace Application;

public static class DependencyInjection
{
    public static IServiceCollection AddCoreEventEngine(this IServiceCollection services, params Assembly[] moduleAssemblies)
    {
        services.AddScoped<IEventPublisher, EventPublisher>();

        var registrations = moduleAssemblies
            .SelectMany(a => a.GetTypes())
            .Where(t => !t.IsAbstract && !t.IsInterface)
            .SelectMany(t => t.GetInterfaces()
                .Where(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IEventHandler<>))
                .Select(i => new { Interface = i, Implementation = t }));
        
        foreach (var reg in registrations)
        {
            services.AddScoped(reg.Interface, reg.Implementation); 
            Console.WriteLine($"Registering {reg.Implementation} - {reg.Interface} Modules.");
            
        }
        
        return services;
    }
}