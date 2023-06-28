import React, { Component } from 'react'

export default class ChildComponent extends Component {
    
    
    handleButtonClick=()=>{
        this.props.buttonClick("data comming from child...")
}
  render() {
    return (
      <div>
       <button onClick={this.handleButtonClick}> click me</button>
      </div>
    )
  }
}
