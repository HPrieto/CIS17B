$(document).ready(function() {
	initWindow();
});

function initWindow() {
	// Get user info from localStorage
	var savedUser = localStorage.getItem('user');
    var mainContainer = document.getElementById('main-container');
    // Check if user is saved
	if (savedUser === null) {
		console.log('user is not saved.')
    	mainContainer.appendChild(SignupModal())
		$('#myModal').modal('show')
		mainContainer.appendChild(ProductPage(items))
	} else {
		console.log('user is saved: ' + savedUser)
		mainContainer.appendChild(ProductPage(items))
	}
}

function showModal() {
	var mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(SignupModal())
	$('#myModal').modal('show')
}

function addToCart(index) {
	var user = localStorage.getItem('user');
	if (user === null) {
		showModal();
		return
	}
	// Get cart from localStorage
	var cart = localStorage.getItem('cart');
	// Check for empty cart
	if (cart == null) {
		// Create new cart if empty
		var newCart = new Array(items.length).fill(0);
		newCart[index] += 1;
		localStorage.setItem('cart', newCart)
	} else {
		// Increment item in cart if not empty
		var cartArr = cart.split(',').map(Number)
		cartArr[index] += 1;
		localStorage.setItem('cart', cartArr);
	}
	console.log(localStorage.getItem('cart'));
}

function logout() {
	var mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = ""
	localStorage.clear();
	initWindow();
}

function toCart() {
	var cart = CartPage(items);
	var mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = ""
	mainContainer.appendChild(cart);
	console.log(mainContainer.innerHTML)
}

function toStore() {
	var store = ProductPage(items);
	var mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = ""
	mainContainer.appendChild(store);
	console.log(mainContainer.innerHTML)
}