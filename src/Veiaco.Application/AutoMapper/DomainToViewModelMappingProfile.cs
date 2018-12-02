using AutoMapper;
using Veiaco.Application.ViewModel;
using Veiaco.Core.Models;

namespace Veiaco.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Pessoa, PessoaViewModel>();
            CreateMap<Fornecedor, FornecedorViewModel>();
        }
    }
}