import React, { Component } from 'react'
import ProductList from './ProductList'
const products=[
    {
        id:1,
        name:"product1",
        price:500,
        descr:"desc 1"
    },
    {
        id:2,
        name:"product2",
        price:700,
        descr:"desc 2"
    },
]
export default class App extends Component {
  render() {
    return (
      <div>
            <ProductList products={products}></ProductList>
      </div>
    )
  }
}
