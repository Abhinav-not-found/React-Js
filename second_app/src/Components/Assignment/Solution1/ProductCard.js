import React from 'react'

export default function ProductCard({id,name, desc, price}) {
  return (
    <div>
        <h1>Id: {id}</h1>
        <h2>Name : {name}</h2>
        <h4>Desc : {desc}</h4>
        <h2>Price : {price}</h2>
    </div>
  )
}
