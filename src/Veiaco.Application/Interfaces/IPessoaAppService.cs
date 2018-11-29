using System;
using System.Collections.Generic;
using Veiaco.Application.ViewModel;

namespace Veiaco.Application.Interfaces
{
    public interface IPessoaAppService : IDisposable
    {
        void Add(PessoaViewModel obj);
        PessoaViewModel GetById(long id);
        IEnumerable<PessoaViewModel> GetAll();
        void Update(PessoaViewModel obj);
        void Remove(long id);
    }
}