//create a constructor function called Animal that takes parameters for name and sound. Add a method to the Animal
//prototype called makeSound that logs the sound of the animal. Create two instance of animal with a specific type
//of sound, and call the makesound method.
//Extend the Animal constructor function to include prototype called type. Update the makeSound  method to include
//the type of animal in the log message. Create an instance of an animal with a specific type and sound, and call
//the makeSound method.


function Animal(name, sound){
    this.name =name;
    this.sound=sound;
}


animal1 = new Animal("Dog","bark")
animal2 = new Animal("Cat","mew")
animal3 = new Animal("Lion","roar")
animal4 = new Animal("Snake","hiss")

Animal.prototype.type = "Domestic"
animal3.type="wild"
animal4.type="wild"
Animal.prototype.makeSound = function(){
    console.log (`${this.name} ${this.sound} ${this.type}`)
    
}

animal4.makeSound()
