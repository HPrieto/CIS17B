// Assignment 3
// Inventory Class

/* Initialize Inventory class/object/function */
function Inventory() {
	var str = localStorage.getItem("Inventory");
	var obj = JSON.parse(str);
	this.items = [];
	this.items.push(obj);
}

/* Adds new item to inventory items list */
Inventory.prototype.add = function(item) {
	this.items.push(item);
}

/* Saves inventory items to localStorage */
Inventory.prototype.save = function() {
	var items = JSON.stringify(this.items);
	localStorage.setItem('Inventory', items);
}

/* Displays inventory items */
Inventory.prototype.display = function() {
     for(var item=0;item<this.items.length;item++){
         document.write("The "+item+" Object</br>");
         var obj=this.items[item];
         for(var property in obj){
             document.write(property+"="+obj[property]+"</br>");
         }
     }
}