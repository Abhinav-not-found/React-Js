//Write a program  that takes a fruit name and displays a corresponding message based 
//on the fruit entered. If an invalid fruit name is entered, display "unknown fruit"
//(using switch case)
let frt_name = "mango";
switch(frt_name){
    case "apple": 
        console.log("An Apple a day keeps doctors away!!!")
        break;
    case "mango":
        console.log("King of fruit")
        break;
    case "grapes":
        console.log("Might be sweet, might be sour")
        break;
    case "banana":
        console.log("Easy to eat")
        break;
    case "orange":
        console.log("I amd color and a fruit")
        break;
    default:
        console.log("Unknown fruit");
}