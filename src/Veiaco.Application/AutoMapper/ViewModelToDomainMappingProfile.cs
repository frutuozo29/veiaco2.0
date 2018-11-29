using AutoMapper;
using Veiaco.Application.ViewModel;
using Veiaco.Core.Models;

namespace Veiaco.Application.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<PessoaViewModel, Pessoa>();
        }
    }
}