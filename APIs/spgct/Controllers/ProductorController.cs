using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using spgct.Models;
using spgct.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace spgct.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductorController : ControllerBase
    {
        public ProductorService _productorService;

        public ProductorController(ProductorService productorService)
        {
            _productorService = productorService;
        }

        // GET: api/<ProductorController>
        [HttpGet]
        public async Task<ActionResult<List<Productor>>> Get()
        {
            return Ok(await _productorService.GetProductores());
        }

        // GET api/<ProductorController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Productor>> Get(string id)
        {
            try
            {

                return Ok(await _productorService.GetProductor(id));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // POST api/<ProductorController>
        [HttpPost]
        public async Task<ActionResult<Productor>> Post([FromBody] Productor productor)
        {
            try
            {

                return Ok(await _productorService.CreateProductor(productor));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        // PUT api/<ProductorController>/5
        [HttpPut]
        public async Task<ActionResult<Boolean>> Put([FromBody] Productor productor)
        {
            return Ok(await _productorService.UpdateProductor(productor.Id, productor));
        }

        // DELETE api/<ProductorController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Boolean>> Delete(string id)
        {
            return Ok(await _productorService.DeleteProductor(id));
        }
    }
}
