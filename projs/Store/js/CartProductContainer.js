function CartProductContainer(item, qty) {
	var product = "<div class='cart-product-container'>";
	product += "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>";
	product += "<img class='img-container' src='img/" + item.image +"'></div>";
	product += "<div class='col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>";
	product += "<div class='cart-description'>";
	product += "<h2>Description: " + item.description +"</h2>";
	product += "<h2>Price: $" + item.price +"</h2>";
	product += "<h2>Qty: " + qty + "</h2>";
	product += "</div></div></div>";
	return product
}