using System;
using System.Collections.Generic;
using Veiaco.Application.ViewModel;

namespace Veiaco.Application.Interfaces
{
    public interface IFornecedorAppService : IDisposable
    {
        void Add(FornecedorViewModel obj);
        FornecedorViewModel GetById(long id);
        IEnumerable<FornecedorViewModel> GetAll();
        void Update(FornecedorViewModel obj);
        void Remove(long id);
    }
}