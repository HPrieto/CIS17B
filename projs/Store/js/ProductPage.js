function ProductPage(items) {
	var cols = 3;
	var div = document.createElement('div');
	var body = "<div class='row'>";
	for (var i = 0; i < items.length; i++) {
		if (i % cols == 0 && i != 0) {
			body += "</div><div class='row'>";
		}
		body += ProductContainer(items[i], i);
	}
	body += "</div>";
	div.innerHTML = body;
	return div;
}