"use strict";
// Q No.1.	Create a function that takes an array, an index, 
// and a value as parameters. Inside the function, use the 
// splice method to insert the value at the specified index in 
// the array. Return the modified array.
let studeNames = ["Nasir Shad", "Asif Bhutta sb.", " Zeeshan Ghani", "Adnan Khalil Sb"];
function takeValueInarray(index1, index2, studentName) {
    studeNames.splice(index1, index2, studentName);
    return studeNames;
}
var newArray = takeValueInarray(3, 1, "Emmanual,Junaid Sabri");
console.log(newArray);
