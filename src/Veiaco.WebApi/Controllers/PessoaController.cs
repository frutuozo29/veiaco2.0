using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Veiaco.Application.Interfaces;
using Veiaco.Application.ViewModel;

namespace Veiaco.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly IPessoaAppService pessoaAppService;

        public PessoaController(IPessoaAppService pessoaAppService)
        {
            this.pessoaAppService = pessoaAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(pessoaAppService.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<PessoaViewModel> Get(long id)
        {
            try
            {
                return Ok(pessoaAppService.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] PessoaViewModel pessoa)
        {
            try
            {
                pessoaAppService.Add(pessoa);
                return Ok(pessoa);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] PessoaViewModel pessoaViewModel)
        {
            try
            {
                pessoaViewModel.Id = id;
                pessoaAppService.Update(pessoaViewModel);
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
                pessoaAppService.Remove(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}