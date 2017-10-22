function ProductContainer(item, index) {
	var product = "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4'>";
	product += "<div class='product-container'>";
	product += "<img class='img-container' src='img/" + item.image + "' />";
	product += "<h4>" + item.description + "</h4>";
	product += "<h5>$" + item.price + "</h5>";
	product += "<button class='btn btn-default' onClick='addToCart(" + index +")'>Buy Now</button>";
	product += "</div></div>";
	return product;
}