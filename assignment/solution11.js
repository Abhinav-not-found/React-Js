//create an object called resturant with properties like name, menu and rating. Writing 
//functions to add items to the menu, remove items from the menu, calculate the average 
//rating of the resturant.
var resturant = {
    name: "South Special Food",
    menu : ["idli", " dosa", " vada"," chutney "],
    rating : [3, 4, 5, 4, 4, 5, 3],
    addItem : function(item) {
        this.menu.push(item)
        return this.menu;
    },

    delItem : function(item){
        let a = this.menu.indexOf(item);
        this.menu.splice(a,1);
        return this.menu;
    },
    avg : function(){
        let sum=0;
        for(let i=0;i<this.rating.length;i++){
            sum+=this.rating[i];
        }
        let avg=sum/this.rating.length;
        return avg;
    }
}
console.log("\nMenu : "+resturant.menu)
console.log("\nafter adding samosa = "+resturant.addItem("samosa"))
console.log("after deleting item = "+resturant.delItem("idli"))
console.log("\n\nrating: " + resturant.rating)
console.log("average rating: "+resturant.avg())
