using System;
using System.Collections.Generic;
using AutoMapper;
using Veiaco.Application.Interfaces;
using Veiaco.Application.ViewModel;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Core.Models;

namespace Veiaco.Application.Services
{
    public class PessoaAppService : AppServiceBase<PessoaViewModel>, IPessoaAppService
    {
        private readonly IPessoaService pessoaService;
        private readonly IMapper mapper;

        public PessoaAppService(IMapper mapper, IPessoaService pessoaService)
        {
            this.pessoaService = pessoaService;
            this.mapper = mapper;
        }
        public void Add(PessoaViewModel obj)
        {
            var pessoa = mapper.Map<PessoaViewModel, Pessoa>(obj);
            pessoaService.Add(pessoa);
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public IEnumerable<PessoaViewModel> GetAll()
            => mapper.Map<IEnumerable<Pessoa>, IEnumerable<PessoaViewModel>>(pessoaService.GetAll());

        public PessoaViewModel GetById(long id)
            => mapper.Map<Pessoa, PessoaViewModel>(pessoaService.GetById(id));

        public void Remove(long id)
            => pessoaService.Remove(id);

        public void Update(PessoaViewModel obj)
        {
            var pessoa = mapper.Map<PessoaViewModel, Pessoa>(obj);
            pessoa.Id = obj.Id;
            pessoaService.Update(pessoa);
        }
    }
}