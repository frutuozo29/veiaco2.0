using System.Collections.Generic;

namespace Veiaco.Core.Interfaces.Services
{
    public interface IServiceBase<TEntity> where TEntity : class
    {
        void Add(TEntity obj);
        TEntity GetById(long id);
        IEnumerable<TEntity> GetAll();
        void Update(TEntity obj);
        void Remove(long id);
    }
}