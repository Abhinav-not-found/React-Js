// create an object called car with properties make and modal. Use an arrow funciton to print a sentence in the format"I drive a [make]
// [modal]." where [make] and [modal] are the values of the corresponding properties.\


let car ={
    make:"Mahindra",
    modal:"XUV",
    abc : ()=>{
        console.log(`I drive a ${car.make} ${car.modal}`)
    }
}


car.abc()
