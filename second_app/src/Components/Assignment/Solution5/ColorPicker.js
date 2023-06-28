//create a componenet called colorpicker that displays a color and a button. Clicking the button should change the color randomly
import React, { Component } from 'react'

export default class ColorPicker extends Component {
    constructor(props){
        super(props)
        this.state={
            colorArray: ['red','blue','green'],
            index:3
        }
    }
    changeColor =()=>{
        if(this.state.index===0){
            this.setState({
                index:this.state.index+1
            })

        }
        if(this.state.index===4){
            this.setState(
                this.setState({
                    index:this.state.index -1}
                )
            )
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.colorArray[this.state.index]}</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}
