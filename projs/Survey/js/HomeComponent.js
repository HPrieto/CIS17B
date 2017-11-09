function HomeComponent() {
	var div = document.createElement('div');
	var body = "<div class='navbar navbar-default navbar-fixed-top'>";
	body += "<div class='container navbar-container'>";
	body += "<button class='navbar-brand btn' style='background-color: transparent;' onClick='toHome()'>Survey</button>";
	body += "<div class='navbar-right'>";
	body += "<button id='create' class='btn btn-default navbar-btn navbar-btn-unfocused' onClick='toCreate()'>Create</button>";
	body += "<button id='logout' class='btn btn-default navbar-btn navbar-btn-unfocused' onClick='logout()'>Log out</button>";
	body += "</div></div><!-- container-fluid end --></div><!-- navbar div end --><div class='body-container'></div>";
	div.innerHTML = body
	return div;
}
