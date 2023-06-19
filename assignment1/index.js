let a = document.getElementById("b1")
let b=a.innerHTML

let counter = 0;
a.addEventListener("click",add)
function add(){
    b+=counter
    counter++
    
    if(counter==1){
        a.innerHTML="Clicked!!!"
    }
    else{
        a.innerHTML=`${counter}` + " times Clicked!!!"
    }
}
//