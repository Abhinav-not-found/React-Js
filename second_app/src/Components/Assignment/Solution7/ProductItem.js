import React, { Component } from 'react'

export default class ProductItem extends Component {
    
    
    handleButtonClick=()=>{
        this.props.buttonClick("Nike shoes added to cart")

}
    handleButtonClick2=()=>{
        this.props.buttonClick2("Removed item")
}
  render() {
    return (
      <div>
        <h1>Product: Nike shoes</h1>
        <p>Price: $55</p>
       <button onClick={this.handleButtonClick}> add to cart</button>
       <button onClick={this.handleButtonClick2}>remove</button>
      </div>
    )
  }
}

