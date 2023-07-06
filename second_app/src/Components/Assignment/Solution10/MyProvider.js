import React,{useState} from 'react'
import MyContext from './MyContext'

export default function MyProvider({children}) {
  
    const[contextState, setContextState]=useState({
        item: 0,
        price: 0
    })
  return (
    <MyContext.Provider value={{contextState,setContextState}}>
        {children}
    </MyContext.Provider>

  )
}
