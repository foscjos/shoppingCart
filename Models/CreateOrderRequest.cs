namespace ShoppingCart.Models
{
    public class CreateOrderRequest
    {
        public ShoppingCart[] cart { get; set; }
        public OrderInfo orderInfo { get; set; }
    }
}
