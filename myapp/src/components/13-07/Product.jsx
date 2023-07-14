import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    // console.log(products, "- products")
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    useEffect(() => {
        if (id && products.length) {
            const result = products.find((product) => product.id == id);
            // console.log(result, "-result")
            setSingleProduct(result)
        }
    }, [id, products])


    console.log(singleProduct, "- singleProduct")


    return (
        <div style={{ display: 'flex', justifyContent: "space-evenly" ,padding:'50'}}>
            <div style={{ width: "30%", height: "550px", border: "5px solid black" ,cursor:'pointer'}}>
                <img style={{ width: "100%", height: "100%" }} src={singleProduct.image} />
            </div>
            <div style={{ width: "50%", height: "700px", border: "5px solid blue" }}>
                <h2>Name :{singleProduct.title}</h2>
                <br />
                <h4>Category: {singleProduct.category}</h4>
                <br />
                <h1>Price : Rs.{singleProduct.price}</h1>
            </div>
        </div >
    )
}

export default Product