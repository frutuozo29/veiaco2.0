using System.Collections.Generic;
using Veiaco.Core.Interfaces.Repository;
using Veiaco.Core.Interfaces.Services;

namespace Veiaco.Core.Services
{
    public class ServiceBase<TEntity> : IServiceBase<TEntity> where TEntity : class
    {
        private readonly IRepositoryBase<TEntity> repositoryBase;

        public ServiceBase(IRepositoryBase<TEntity> repositoryBase)
        {
            this.repositoryBase = repositoryBase;
        }

        public void Add(TEntity obj)
        {
            repositoryBase.Add(obj);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return repositoryBase.GetAll();
        }

        public TEntity GetById(long id)
        {
            return repositoryBase.GetById(id);
        }

        public void Remove(long id)
        {
            repositoryBase.Remove(id);
        }

        public void Update(TEntity obj)
        {
            repositoryBase.Update(obj);
        }
    }
}