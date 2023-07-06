import React,{useContext,useState} from 'react'
import MyContext from './MyContext'

const CountNumber = (count) =>{
  return(
    {count}
    )
  }
  export default function ShoppingInterface({itemsRecieved}) {
    const{contextState, setContextState} = useContext(MyContext)
    
    const[count, setCount]=useState(0);
    const q=1
  return (
    <div>
        <h1>Item Collection:</h1>
        Dell Laptop: <br></br>
        Quantity:{q}, price:100  &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item+1,
        price: contextState.price+100});setCount(count+1);
        itemsRecieved("Dell laptop")}}>Add item{count}</button>
        &nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item-1,
        price: contextState.price-100})}}>Remove item</button>
       


        <br></br>
        <br></br>


        Hp Laptop: <br></br>
        Quantity:1, price:150  &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item+1,
        price: contextState.price+150})}}>Add item</button>
        &nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item-1,
        price: contextState.price-150})}}>Remove item</button>


        <br></br>
        <br></br>


        Mac Laptop: <br></br>
        Quantity:1, price:300  &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item+1,
        price: contextState.price+300})}}>Add item</button>
        &nbsp;&nbsp;&nbsp;<button onClick={()=>{setContextState({item: contextState.item-1,
        price: contextState.price-300})}}>Remove item</button>
    </div>
  )
}
