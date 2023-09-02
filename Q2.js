"use strict";
// Q No.2.	Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items,and update quantities
//  using the splice method. Print the cart's contents after each operation
var shoppingCart = ["Egg", "Bread", "Milk", "Yougart", "Pickle", "Biscuits"];
function changeInCart(index1, index2, item, data1) {
    shoppingCart.splice(index1, index2, item, data1);
    return shoppingCart;
}
var updatedCart = changeInCart(shoppingCart.length, 0, "Sugar", "Bakherkhani");
console.log(updatedCart);
console.log("-----------------------------------------------------------");
updatedCart.splice(updatedCart.length - 1, 0);
console.log(updatedCart);
console.log("-----------------------------------------------------------");
