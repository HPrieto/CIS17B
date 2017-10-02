/* 
    Created on : Sep 18, 2017, 6:28:09 PM
    Author     : Head First Javascript Example Project
 */

function view(msg, location) {
    this.msg = msg;
    this.location = location;
}

/* view displayMessage function using es6 arrow function notation */
view.prototype.displayMessage = () => {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = this.msg;
}

view.prototype.displayHit = () => {
    var cell = document.getElementById(this.location);
    cell.setAttribute("class", "hit");
}

view.prototype.displayMiss = () => {
    var cell = document.getElementById(this.location);
    cell.setAttribute("class", "miss");
}



















