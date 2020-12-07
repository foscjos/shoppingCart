using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ShoppingCart.Models;
using System.Collections.Generic;
using System.Data;

namespace ShoppingCart.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SandwichMenuController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public SandwichMenuController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IEnumerable<Sandwich> Get()
        {
            List<Sandwich> sandwichList = new List<Sandwich>();
            string connectionString = _configuration.GetConnectionString("ShoppingCartDB");
            IDbConnection connection = new SqlConnection(connectionString);
            using (connection)
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    // Should be a SPROC
                    command.CommandText = "SELECT * FROM dbo.Items";

                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        var sandwich = new Sandwich
                        {
                            SKU = (int)reader.GetValue(reader.GetOrdinal("SKU")),
                            Name = (string)reader.GetValue(reader.GetOrdinal("Name")),
                            Description = (string)reader.GetValue(reader.GetOrdinal("Description")),
                            Price = (decimal)reader.GetValue(reader.GetOrdinal("Price")),
                        };

                        sandwichList.Add(sandwich);
                    }
                }
            }

            return sandwichList;
        }
    }
}