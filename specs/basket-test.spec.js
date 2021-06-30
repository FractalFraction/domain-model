assertEquals = require("../src/testing-framework.js");
assertEquals = require("../src/basket.js");

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
myBasket.capacity;
// Return Number 
myBasket.items;
// Return Array
myBasket.addItem(newItem);
// Return String 
myBasket.getItems();
// Return Array: 

// Verify
console.log(assertEquals(myBasket.capacity,10))
// Output: true
console.log(assertEquals(myBasket.items, items))
// Output: true
console.log(assertEquals(myBasket.addItem(),`Added ${newItem} to your basket.`))
// Output: true
console.log(assertEquals(myBasket.getItems(), ['chocolate', 'banana', 'peanut butter','bread']))
// Output: true 