//write a named function sumArray that takes an array of numbers as an argument and return
//the sum of all numbers in the array.
function sumArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
