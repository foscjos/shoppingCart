using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using ShoppingCart.Models;
using System.Data;

namespace ShoppingCart.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public OrderController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("create/Order")]
        public void PostOrder(CreateOrderRequest request)
        {
            // Should really be split across a few different classes to handle business logic, accessing DB, etc.
            string connectionString = _configuration.GetConnectionString("ShoppingCartDB");
            IDbConnection connection = new SqlConnection(connectionString);
            if (request.orderInfo != null)
            {
                using (connection)
                {
                    connection.Open();

                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "[dbo].[CreateOrder]";
                        command.CommandType = CommandType.StoredProcedure;

                        command.Parameters.Add(new SqlParameter("@BillingFirstName", request.orderInfo.BillingFirstName));
                        command.Parameters.Add(new SqlParameter("@BillingLastName", request.orderInfo.BillingLastName));
                        command.Parameters.Add(new SqlParameter("@CreditCardNum", request.orderInfo.BillingCreditCardNumber));
                        command.Parameters.Add(new SqlParameter("@ShippingFirstName", request.orderInfo.ShippingFirstName));
                        command.Parameters.Add(new SqlParameter("@ShippingLastName", request.orderInfo.ShippingLastName));
                        command.Parameters.Add(new SqlParameter("@ShippingStreetAddress", request.orderInfo.ShippingStreetAddress));
                        command.Parameters.Add(new SqlParameter("@ShippingCity", request.orderInfo.ShippingCity));
                        command.Parameters.Add(new SqlParameter("@ShippingState", request.orderInfo.ShippingState));
                        command.Parameters.Add(new SqlParameter("@ShippingPostal", request.orderInfo.ShippingPostalCode));

                        command.ExecuteNonQuery();
                    }
                }
            }
        } 
    }
}
