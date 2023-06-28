import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            msg_data:null
        }
    }
    handleMsgData=(data)=>{
        this.setState(
            {
                msg_data:data
            }
        )
    }
  render() {
    return (
      <div>
            <h1>{this.state.msg_data}</h1>
            <ChildComponent buttonClick={this.handleMsgData}></ChildComponent>
      </div>
    )
  }
}
