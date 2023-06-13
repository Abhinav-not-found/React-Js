//Create a program to do the following operations

//1.create an array named number containing numbers 1 to 5
//2.slice the array from index 1 and 2 and store it in new array called subset
//3.Display the subset
//4.Splice the array at index 2 to remove element
//5.Display updated array
//6.Splice the array at index 2 to add 6
//7.Display final array

let number = [1,2,3,4,5]

let subset = number.slice(1,3)
console.log("subset = "+ subset)

number.splice(2,1)//removing 3
console.log("after splicing(2,1) = "+number)

number.splice(2,0,6)//adding 6 between 2,4
console.log("after splicing(2,0,6) = "+number)