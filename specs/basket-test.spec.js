assertEquals = require("../src/testing-framework.js");

// Setup 
// Check if the basket object is set up
// Set up items as an array of strings

// Inputs
const items = ['chocolate','banana','peanut butter'];
const newItem = 'bread';
const itemCapacity = 10;

// Instantiate a basket classes containing items (which may be empty) 
const myBasket = new Basket(items,itemCapacity);

// Execute
myBasket.getCapacity();
// Return Number 
myBasket.getItems();
// Return Array
myBasket.addItem(newItem);
// Return String 
myBasket.getItems();
// Return Array: 
myBasket.isFull();
// Return Boolean 

// Verify
console.log(assertEquals(myBasket.getCapacity())