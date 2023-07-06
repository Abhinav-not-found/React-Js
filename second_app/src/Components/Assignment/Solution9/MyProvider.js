import React,{useState} from 'react'
import MyContext from './MyContext'

export default function MyProvider({children}) {
    const[contextState, setContextState]=useState({
        name: "Abhinav"
    })
  return (
    <MyContext.Provider value={{contextState,setContextState}}>
        {children}
    </MyContext.Provider>

  )
}
