//create a class called shape with properties color and name. Add a getter method called area of the shape.
//create a subclass called circle that extends the shape class. Add a constructorthat takes additional property radius 
//and sets it. Override te area getter to calculate and return the area of the circle(use formula: Math.PI *radius*radius)
//create a subclass called rectangle that extends the shape class.Add a constructor that tkes properties width and height and 
//sets them.Override the area getter to claculate and return the area of the rectangle(width*height).
//create an instance of the circle with radius of 5. Call the area getter on the instance and print the result.
//create an instance of rectangle class with a width of 4 and a height of 6. call the area getter on the instance and print the result.
//Add a setter method called name to the shape class that sets the name of the shape to the given value. Override the setter in the Rectangle 
//class to append"(Rectangle)" to the name.Create
//an instance of the Rectangle class and set its nameto "My rectangle". Print the name property of the instance

class Shape{
    constructor(name,color){
        this.name=name
        this.color=color
    }
    get area(){
        return 0;
    }
    set shapeName(value){ 
        this.name=value;
    }
}
class Circle extends Shape{
    constructor(radius,name,color){
        super(name,color)
        this.radius=radius
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
}
class Rectangle extends Shape{
    constructor(width,height,name,color){
        super(name,color)
        this.width=width
        this.height=height
    }
    get area(){
        return this.height*this.width
    }
}
let cir1= new Circle(5,"circle","red")
console.log(cir1.area);

let rec1=new Rectangle(4,6,"rectangle","blue")
console.log(rec1.area);
rec1.shapeName= "My rectangle"
console.log(rec1.name)
