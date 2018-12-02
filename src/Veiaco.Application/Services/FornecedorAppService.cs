using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Veiaco.Application.Interfaces;
using Veiaco.Application.ViewModel;
using Veiaco.Core.Interfaces.Services;
using Veiaco.Core.Models;

namespace Veiaco.Application.Services
{
    public class FornecedorAppService : AppServiceBase<FornecedorViewModel>, IFornecedorAppService
    {
        private readonly IFornecedorService fornecedorService;
        private readonly IMapper mapper;

        public FornecedorAppService(IMapper mapper, IFornecedorService fornecedorService)
        {
            this.mapper = mapper;
            this.fornecedorService = fornecedorService;
        }
        public void Add(FornecedorViewModel obj)
            => fornecedorService.Add(mapper.Map<FornecedorViewModel, Fornecedor>(obj));

        public void Dispose()
            => GC.SuppressFinalize(this);

        public IEnumerable<FornecedorViewModel> GetAll()
            => mapper.Map<IEnumerable<Fornecedor>, IEnumerable<FornecedorViewModel>>(fornecedorService.GetAll().ToList());

        public FornecedorViewModel GetById(long id)
            => mapper.Map<Fornecedor, FornecedorViewModel>(fornecedorService.GetById(id));

        public void Remove(long id)
            => fornecedorService.Remove(id);

        public void Update(FornecedorViewModel obj)
        {
            var fornecedor = mapper.Map<FornecedorViewModel, Fornecedor>(obj);
            fornecedor.Id = obj.Id;
            fornecedorService.Update(fornecedor);
        }
    }
}