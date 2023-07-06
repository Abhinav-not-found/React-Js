import React,{useContext, useState} from 'react'
import CountNumber from "./ShoppingInterface"
import MyContext from './MyContext'
// import count from './ShoppingInterface'
import ShoppingInterface from './ShoppingInterface'

export default function ShoppingCart() {
    const{contextState, setContextState} = useContext(MyContext)
    const[cartItems,setCartItems]=useState([]);
    
    const itemsRecieved=(item)=>{
        setCartItems([...cartItems,item]);
    }
    let a = cartItems.map((item,index)=>(<p key={index}>{item}</p>))
    
  return (
    <div>
       <ShoppingInterface itemsRecieved={itemsRecieved}></ShoppingInterface>


       <h1>Shopping Cart:</h1>
       {a}
       <CountNumber/>
       {/* {count} */}



    
        <h2>Total items:{contextState.item} </h2>
        <h2>Total price: {contextState.price} </h2>
    </div>
  )
}
