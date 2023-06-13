//Write an annonymous funciton that takes an array of numbers as an argument and return
//the largest number in the array.
let array = function(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return "Largest number = " + max;
}
console.log(array("1,2,3,4,5"))
