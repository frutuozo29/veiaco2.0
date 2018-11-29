using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Veiaco.Core.Interfaces.Repository;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Data.ContextDb;
using Veiaco.Data.Repositories;

namespace Veiaco.CrossCutting.IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterService(IServiceCollection service)
        {
            // Application
            service.AddSingleton(Mapper.Configuration);

            // Core
            service.AddScoped<IPessoaService, PessoaService>();
            // Data
            service.AddScoped<IPessoaRepository, PessoaRepository>();
            service.AddScoped<VeiacoContext>();
        }
    }
}