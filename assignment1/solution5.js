//Write a program that maintains a shopping cart. The program should allow users to add items
// to the cart using push, remove items using pop, remove the first item from the cart using
// unshift. Display the updated shopping cart after each operation.

let shp_cart = [1, 2, 3, 4, 5]

shp_cart.push(6)
console.log("after pushing = "+shp_cart)

shp_cart.unshift(0)
console.log("after unshifting = "+shp_cart)

shp_cart.pop()
console.log("after poping = "+shp_cart)

shp_cart.shift()
console.log("after shifting = "+shp_cart)   