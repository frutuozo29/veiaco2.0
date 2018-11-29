using Veiaco.Core.Interfaces.Repository;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Core.Models;

namespace Veiaco.Core.Services
{
    public class PessoaService : ServiceBase<Pessoa>, IPessoaService
    {
        private readonly IPessoaRepository pessoaRepository;
        public PessoaService(IPessoaRepository pessoaRepository)
            : base(pessoaRepository) => this.pessoaRepository = pessoaRepository;
    }
}