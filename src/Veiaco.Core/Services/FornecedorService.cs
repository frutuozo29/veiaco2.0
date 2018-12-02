using Veiaco.Core.Interfaces.Repository;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Core.Models;

namespace Veiaco.Core.Services
{
    public class FornecedorService : ServiceBase<Fornecedor>, IFornecedorService
    {
        private readonly IFornecedorRepository fornecedorRepository;
        public FornecedorService(IFornecedorRepository fornecedorRepository)
            : base(fornecedorRepository) => this.fornecedorRepository = fornecedorRepository;
    }
}