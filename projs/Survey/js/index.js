$(document).ready(function() {
	initWindow();
});

function initWindow() {
	// Get user info from localStorage
	var savedUser = localStorage.getItem('user');
  var app = document.getElementById('App');
	// Present HomeContainer
	toHome();
  // Check if user is saved
	if (savedUser === null) {
		console.log('user is not saved.')
    app.appendChild(SignupModal())
		$('#myModal').modal('show')
	} else {
		console.log('user is saved.')
	}
}

function logout() {
	var app = document.getElementById('App');
	app.innerHTML = ""
	localStorage.clear();
	initWindow();
}

function toHome() {
	var component = HomeComponent();
	var app = document.getElementById('App');
	app.innerHTML = ""
	app.appendChild(component);
	console.log(app.innerHTML)
}

function toCreate() {
	var component = CreateComponent();
	var app = document.getElementById('App');
	app.innerHTML = ""
	app.appendChild(component);
	console.log(app.innerHTML)
}
