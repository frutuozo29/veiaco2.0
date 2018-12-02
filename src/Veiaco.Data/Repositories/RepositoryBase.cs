using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Veiaco.Core.Interfaces.Repository;
using Veiaco.Data.ContextDb;

namespace Veiaco.Data.Repositories
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class
    {
        protected VeiacoContext veiacoContext;
        protected DbSet<TEntity> DbSet;

        public RepositoryBase()
        {
            veiacoContext = new VeiacoContext();
            DbSet = veiacoContext.Set<TEntity>();
        }

        public void Add(TEntity obj)
        {
            var entitySaved = DbSet.Add(obj);
            veiacoContext.SaveChanges();
        }

        public void Dispose()
        {
            veiacoContext.Dispose();
            GC.SuppressFinalize(this);
        }

        public IQueryable<TEntity> GetAll() => DbSet;

        public TEntity GetById(long id) => DbSet.Find(id);

        public void Remove(long id)
        {
            veiacoContext.Remove(DbSet.Find(id));
            veiacoContext.SaveChanges();
        }

        public void Update(TEntity obj)
        {
            veiacoContext.Update(obj);
            veiacoContext.SaveChanges();
        }
    }
}