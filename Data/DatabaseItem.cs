using Microsoft.EntityFrameworkCore;
using ShoppingCart.Models;

namespace ShoppingCart.Data
{
    public class DatabaseItem : DbContext
    {
        public DatabaseItem (DbContextOptions<DatabaseItem> options)
            : base(options)
        {
        }

        public DbSet<Item> Item { get; set; }
    }
}
