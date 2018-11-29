using Veiaco.Core.Interfaces.Services;

namespace Veiaco.Application.Services
{
    public class AppServiceBase<TEntity> where TEntity : class
    {
        protected readonly IServiceBase<TEntity> serviceBase;
    }
}