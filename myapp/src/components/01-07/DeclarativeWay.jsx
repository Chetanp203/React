import React from 'react'
import mydata from "./../../data/myProducts.json"
export const DeclarativeWay = () => {
  return (
    <div>
        {mydata.map((product)=>(
            <div>
                <h1>Name: {product.name}</h1>
                <h2>ID:{product.p_id}</h2>
                <h3>Price: {product.price}</h3>
                <h3>Description: {product.description}</h3>
                <h3>Category: {product.category}</h3>
                <h3>Quantity: {product.Quantity}</h3>
                </div>
        
        ))}
        
    </div>
  )
}
export default DeclarativeWay;
