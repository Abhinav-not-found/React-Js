//Write a program that checks for a prime number
let num = 13;
let count = 0;
let i = 2;
while(i <= num/2){
   if(num % i == 0){
       count = count + 1
       break
   }
   i = i + 1
}
if (count == 0){
   console.log(num + " is a prime number")
}
else{
   console.log(num + " is not a prime number")
}