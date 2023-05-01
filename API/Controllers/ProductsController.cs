
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; 
using API.Data;
using API.Entities;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController:ControllerBase
    {
        private readonly StoreContext context;
       public ProductsController(StoreContext context)
       {
        this.context = context;
       } 

       [HttpGet]
       public async Task<ActionResult<List<Product>>> GetProducts()
       {
       return await context.Products.ToListAsync();
        
       }

       [HttpGet("{id}")]
       
       public async Task<ActionResult<Product>>GetProduct(int id)
       {
        return await context.Products.FindAsync(id);

       }

    //     [HttpGet("{price}")]
    //    public ActionResult<Product>GetProduct(string price)
    //    {
    //     return context.Products.Find(price);
    //    }
    }
}