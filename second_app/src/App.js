import React, { Component } from 'react'
import Folder from './Components/Assignment/Solution8/Folder'
const FileClick=()=>{
  alert("File1 (2kb)")
}
export default class App extends Component {

  render() {

    return (
      <div>
      <Folder file="file1" onclick={()=>FileClick}></Folder>
      </div>
    )
  }
}
