using System;
using Microsoft.AspNetCore.Mvc;
using Veiaco.Application.Interfaces;
using Veiaco.Application.ViewModel;

namespace Veiaco.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedorController : ApiController
    {
        private readonly IFornecedorAppService fornecedorAppService;

        public FornecedorController(IFornecedorAppService fornecedorAppService)
            => this.fornecedorAppService = fornecedorAppService;

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(fornecedorAppService.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<FornecedorViewModel> Get(long id)
        {
            try
            {
                return Ok(fornecedorAppService.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] FornecedorViewModel fornecedor)
        {
            try
            {
                fornecedorAppService.Add(fornecedor);
                return Ok(fornecedor);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] FornecedorViewModel fornecedorViewModel)
        {
            try
            {
                fornecedorViewModel.Id = id;
                fornecedorAppService.Update(fornecedorViewModel);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            try
            {
                fornecedorAppService.Remove(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}