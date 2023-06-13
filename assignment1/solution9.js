//Write an annonymous funciton that takes an array of numbers as an argument and return
//the largest number in the array.
let array = function(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return "Largest number = " + max;
}
console.log(array([-5,6,-99,205]))
//yes sir
