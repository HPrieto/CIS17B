// Basic button input bools
// true -> pressed
var input = {
    left: false,
    right: false,
    up: false,
    down: false,
    attack: false,
    run: false };

// Previous state of input
var pInput = {
    left: false,
    right: false,
    up: false,
    down: false,
    attack: false,
    run: false };

var lastTime;

var objs = [];

// Calculate the scaling factor
var scaleFact;

function calcScaling() {
    var oldFact = scaleFact; // Save the scale factor before we change it
    var min; // The smaller viewport dimension in px
    var des; // "desired" viewport dimension in px

    // Find the right values
    if (window.innerWidth <= window.innerHeight) {
        min = window.innerWidth;
        des = 256;
	} else {
		min = window.innerHeight;
		des = 225;
	}

    // Calculate, floor the value so we get an integer
	scaleFact = Math.floor(min / des);

    // Make sure the factor isn't 0 or negative
	if (scaleFact < 1) scaleFact = 1;

    // if the factor changed, resize all elements
    if (scaleFact !== oldFact) {
        // Resize the elements
        console.log(scaleFact);
        if (player) {
            // TODO: Once anim system has been implemented we'll use
            // the cell dimensions and sheet dimensions instead of constants
            player.elem.style.width = scaleFact * 16 + "px";
            player.elem.style.height = scaleFact * 16 + "px";
            player.elem.style.backgroundSize = scaleFact * 113 + "px " + scaleFact * 184 + "px";
        }
    }
}

window.onload = calcScaling;

window.onresize = calcScaling;


// Basic event listereners to update the corresponding value in 'input'
// This way 'input' will always contain the state of each button.
// http://keycode.info/ to get keycodes
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
         input.left = true;
    } else if(event.keyCode == 39) {
         input.right = true;
    } else if(event.keyCode == 40) {
         input.down = true;
    } else if(event.keyCode == 38) {
         input.up = true;
    } else if(event.keyCode == 32) {
         input.attack = true;
    } else if(event.keyCode == 16) {
         input.run = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {
         input.left = false;
    } else if(event.keyCode == 39) {
         input.right = false;
    } else if(event.keyCode == 40) {
         input.down = false;
    } else if(event.keyCode == 38) {
         input.up = false;
    } else if(event.keyCode == 32) {
         input.attack = false;
    } else if(event.keyCode == 16) {
         input.run = false;
    }
});

// Instance the player
scaleFact = 4;
var player = new Player("Player");

var obj1 = new GameObject("one");
obj1.size = new Vector2(10, 10);
obj1.position = new Vector2(30, 30);
document.body.appendChild(obj1.elem);
obj1.elem.style.backgroundColor = "blue";
obj1.elem.style.width = (obj1.size.x * scaleFact) + "px";
obj1.elem.style.height = (obj1.size.y * scaleFact) + "px";

var obj2 = new GameObject("two");
obj2.size = new Vector2(10, 10);
obj2.position = new Vector2(30, 90);
obj2.velocity = new Vector2(5, -140);
document.body.appendChild(obj2.elem);
obj2.elem.style.backgroundColor = "red";
obj2.elem.style.width = obj2.size.x * scaleFact + "px";
obj2.elem.style.height = obj2.size.y * scaleFact + "px";


objs.push(obj1);
objs.push(obj2);

// Since none of the code generates HTML yet we
// just get the preextisting html object
player.elem = document.getElementById("player");

// All game logic, physics, input, ai, etc
function update(deltaTime) {

    player.update(deltaTime);

    for (i = 0; i < objs.length; i++) {
        objs[i].update(deltaTime);
    }

	/*
	for (i = 0; i < objs.length; i++) {
        //objs[i].p(deltaTime);
    }*/

	phys(obj2, obj1, deltaTime);


    pInput = Object.assign(pInput, input);
}

function draw(deltaTime) {
	for (i = 0; i < objs.length; i++) {
		objs[i].draw(deltaTime);
	}


     // Will also need to handle a moving camera
	player.draw(deltaTime);

    // TODO: Map drawing
}

// Main loop function
// Called as often as it can be
function loop() {
    // Get the delta time
    // This is just the time that has passed since the last loop() call
    // in seconds
    // It will typically be 1/60
    var deltaTime = 0.0;
    if (typeof lastTime !== "undefined") {
        deltaTime = (Date.now() - lastTime) / 1000.0;
    } else {
        deltaTime = 0;
    }
    lastTime = Date.now();

    // Get the fps, just cause
    var fps = 1 / deltaTime;
    if (fps < 50) console.log("Stutter " + deltaTime * 1000 + " ms");


    // Call the update function, all game logic, physics, input, ai, etc
    update(deltaTime);

    // Draw the changes
    // Really this just updates the CSS of the HTML objects
    draw(deltaTime);

    // Let the browser update and then recall the loop function
    requestAnimationFrame(loop);

}

// Jump into the loop, start the game
requestAnimationFrame(loop);
