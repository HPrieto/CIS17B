$(document).ready(function() {
	initWindow();
});

function initWindow() {
    console.log('working...');
    var main = document.getElementById('main');
    var hearts = 25;
    main.appendChild(LifeBar(hearts));
}

// potion, bow, bomb
