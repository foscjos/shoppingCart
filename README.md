# ShoppingCart

An incredibly well designed shopping experience. It's a wonder you left with any money at all.

Initial template taken from [microsoft docs](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0&tabs=visual-studio).

Below is sql used to set up DB (mat be outdated but should get you close) in case the db needs to be restored or gets wiped out:

CREATE TABLE Items (
	SKU int NOT NULL PRIMARY KEY,
	Name varchar(255),
	Description varchar(255),
	Price decimal(19, 2)
)

INSERT INTO Items 
values (
1,
'Rueben',
'Corned Beef, Swiss Cheese and Sauerkraut',
8.99
), (
2,
'Croque-Monsieur',
'Ham and cheese baked sandwich',
10.99
), (
3,
'PB+J',
'Smooth PB and Grape Jam',
4.99
), (
4,
'Cheesesteak',
'Beefsteak and melted cheese',
9.99
), (
5,
'Breakfast Sammy',
'Scrambled eggs and bacon',
8.99
)


CREATE TABLE Orders (
	OrderNum int NOT NULL PRIMARY KEY IDENTITY(1,1),
	BillingFirstName varchar(255),
	BillingLastName varchar(255),
	CreditCardNum int,
	ShippingFirstName varchar(255),
	ShippingLastName varchar(255),
	ShippingStreetAddress varchar(255),
	ShippingCity varchar(255),
	ShippingState varchar(255),
	ShippingPostal int
)


CREATE TABLE OrdersItems (
	OrderNum int NOT NULL FOREIGN KEY REFERENCES dbo.Orders(OrderNum),
	SKU int NOT NULL FOREIGN KEY REFERENCES dbo.Items(SKU),
	Price decimal(19, 2),
	Quantity int
)

--------------------

CREATE PROCEDURE dbo.CreateOrder
	@BillingFirstName varchar(255) = NULL,
	@BillingLastName varchar(255) = NULL,
	@CreditCardNum int = NULL,
	@ShippingFirstName varchar(255) = NULL,
	@ShippingLastName varchar(255) = NULL,
	@ShippingStreetAddress varchar(255) = NULL,
	@ShippingCity varchar(255) = NULL,
	@ShippingState varchar(255) = NULL,
	@ShippingPostal int = NULL
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO dbo.Orders
		(
		BillingFirstName,
		BillingLastName,
		CreditCardNum,
		ShippingFirstName,
		ShippingLastName,
		ShippingStreetAddress ,
		ShippingCity ,
		ShippingState ,
		ShippingPostal
		)
	VALUES
		(
		@BillingFirstName,
		@BillingLastName,
		@CreditCardNum,
		@ShippingFirstName,
		@ShippingLastName,
		@ShippingStreetAddress,
		@ShippingCity,
		@ShippingState,
		@ShippingPostal
		)

END

GO

--------------------