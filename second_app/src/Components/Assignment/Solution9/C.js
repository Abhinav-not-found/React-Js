import React,{useContext} from 'react'
import MyContext from './MyContext'
export default function C() {
    const{contextState, setContextState} = useContext(MyContext)
  return (
    <div>
        <h1>{contextState.name}</h1>
    </div>
  )
}
