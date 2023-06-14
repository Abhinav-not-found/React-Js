//create an object called resturant with properties like name, menu and rating. Writing 
//functions to add items to the menu, remove items from the menu, calculate the average 
//rating of the resturant.
var resturant = {
    name: "South Special Food",
    menu : ["idli ", "dosa ", "vada ","chutney "],
    rating : [3,4,5,4,4,5,3],
    addItem : function() {
        this.menu.push()
        return this.menu;
    },
    delItem : function(){
        this.menu.pop()
        return this.menu;
    }
}
console.log("Menu : "+resturant.menu)
console.log("after adding samosa = "+resturant.addItem("samosa"))
console.log("after deleting last item = "+resturant.delItem())
//