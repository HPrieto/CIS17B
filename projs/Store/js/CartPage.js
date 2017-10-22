function CartPage() {
	var div = document.createElement('div');
	var cart = localStorage.getItem('cart');
	var body = "<div>";
	if (cart == null) {
		body += "<h1>Empty Cart</h1>"
	} else {
		var cartArr = cart.split(',').map(Number)
		for (var i = 0; i < items.length; i++) {
			if (cartArr[i] !== 0) {
				body += "<div class='row'>";
				body += CartProductContainer(items[i],cartArr[i]);
				body += "</div>";
			}
		}
		console.log(body)
	}
	body += "</div>"
	div.innerHTML = body;
	console.log(body)
	return div;
}