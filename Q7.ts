// Q No.7.	Create a function that takes an array of numbers as
// parameter. Use a while loop to calculate and return the sum of
// all the numbers in the array.
var arrayofsum:number[]=[110,200,330,450,600,700,8,9,10,220,]
var totalsum:number=0
var index:number=0
while (index<arrayofsum.length)
{
    totalsum=totalsum+arrayofsum[index]
    index++   
}
console.log(totalsum)