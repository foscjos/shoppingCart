namespace ShoppingCart.Models
{
    public class OrderInfo
    {
        public string BillingFirstName { get; set; }
        public string BillingLastName { get; set; }
        public string BillingCreditCardNumber { get; set; }
        public string ShippingFirstName { get; set; }
        public string ShippingLastName { get; set; }
        public string ShippingStreetAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingState { get; set; }
        public string ShippingPostalCode { get; set; }

    }
}
