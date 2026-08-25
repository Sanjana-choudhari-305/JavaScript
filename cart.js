/*Description
Objective:
To work with Spread operators

Scenario:
Write a JavaScript program that uses the spread operator (...) to merge two shopping cart arrays.

Requirements:
Create a defaultGroceryPack array with at least 2 grocery items (each item should be an object with id, name, and price).
Create another addedItems array with at least 2 new grocery items in the same object format.
Write a function named mergeCart that takes the two arrays as parameters and returns a new array containing all the items.
Use the spread operator to combine the arrays.
Print the final cart to the console.*/

let defaultGroceryPack = [{id:1, name:'Rice - 5kg',price:350},
    {id:2, name: 'Cooking Oil - 1L',price:150}];
let addedItems = [{id:3, name:'Milk - 1L',price:50},
    {id:4, name:'Eggs - 12pcs',price: 70}];
function mergeCart(arr1,arr2){
    return [...arr1, ...arr2];
}
console.log("Final Cart: "+mergeCart(defaultGroceryPack,addedItems));
