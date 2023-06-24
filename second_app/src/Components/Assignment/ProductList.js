import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList(props) {
    const displayProducts =[]
    for(let index=0;index<props.products.length;index++){
        const element =props.products[index]
        displayProducts.push(
        <ProductCard key={element.id} id={element.id} name={element.name} price={element.price} desc={element.desc}></ProductCard>)
    }
  return (
    <div>
    {displayProducts}
    </div>
  )
}
