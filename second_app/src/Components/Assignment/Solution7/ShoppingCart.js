//Create a parent component called ShoppingCart and a child component called ProductItem. The productItem component should display a single product and allow
// the user to add it to shopping cart. When a user clicks the "add to cart" button, the ProductItem component should send the selected product data to the
//shoppingcart component. The shoppingCart component should display the selected product and provide functionality to manage the cart items.
import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ShoppingCart extends Component {
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
handleMsgData2=(data)=>{
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
            <ProductItem buttonClick={this.handleMsgData} buttonClick2={this.handleMsgData2}></ProductItem>
            
      </div>
    )
  }
}


