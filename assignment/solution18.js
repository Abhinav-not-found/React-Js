//Write an arrow function that takes an array of numbers as a parameter and returns a new array containing only the even numbers.
let abc = (arr)=>{
        console.log("Initial array: ",arr)
        let new_arr=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2==0){
                new_arr.push(arr[i])
            }
        }
        // console.log(new_arr)
        return new_arr
};
console.log(abc([1,2,3,4]))
