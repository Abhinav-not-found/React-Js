// create a class called Animal with properties name and sound. Add a method makesound() that prints thesound of
// the animal. 

//Create a subclass called Dog that extends the Animal class. Add a constructor that sets the sound
//property to 'woof'. Override the makeSound() method to also print the name of the dog.

//Create a subclass cat that extends the animal class.Add a constructor the sets thesound property to "meow".Override
//the makesound() method to also print the name of cat.

//create an array called animals and add multiple instances of dog and cat to it.
//iterate over the animals array and call the makesound() method on each animal.
class Animal{
    constructor(name , sound){
        this.name=name
        this.sound=sound
    }
    makeSound(){
        console.log(`${this.name } ${this.sound}`)
    }
}
class Dog extends Animal{
    constructor(sound){
        super(sound)
       
    }
}
class Cat extends Animal{
    constructor(sound){
        super(sound)
    }
}

let dog1 = new Dog("woof")
// dog1.makeSound()
let cat1= new Cat("meow")
// cat1.makeSound()

let animals=[cat1,dog1]
for(let i=0;i<animals.length;i++){
    Animal.makeSound([i])
}