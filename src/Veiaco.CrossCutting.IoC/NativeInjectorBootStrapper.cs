using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Veiaco.Application.Interfaces;
using Veiaco.Application.Services;
using Veiaco.Core.Interfaces.Repository;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Core.Services;
using Veiaco.Data.ContextDb;
using Veiaco.Data.Repositories;

namespace Veiaco.CrossCutting.IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection service)
        {
            // Application
            service.AddScoped<IPessoaAppService, PessoaAppService>();
            service.AddScoped<IFornecedorAppService, FornecedorAppService>();

            // Core
            service.AddScoped<IPessoaService, PessoaService>();
            service.AddScoped<IFornecedorService, FornecedorService>();
            // Data
            service.AddScoped<IPessoaRepository, PessoaRepository>();
            service.AddScoped<IFornecedorRepository, FornecedorRepository>();
            service.AddScoped<VeiacoContext>();
        }
    }
}