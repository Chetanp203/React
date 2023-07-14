import React, { useEffect, useState } from 'react'
import './ProductFromBackend.css'
import { useNavigate } from 'react-router';


const ProductFromBackend = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            // .then(json => console.log(json))
    }, [])

    const redirect=(id)=>{
        // console.log(id,"-id")
        // alert('working..')
        router(`/product/${id}`)
    
    }
    return (
        <div>
            <h1>Products:</h1>


            {products.length ?
            <div className="products">
                {products.map((pro) => (
                    <div className="product-card" onClick={() =>redirect(pro.id)}>
                        <img src={pro.image} />
                        <p><b>ID :</b>{pro.id}</p>
                        <h4>Name : {pro.title}</h4>
                        <p><b>Category :</b>{pro.category}</p>
                        <h2>Price : ₹{pro.price}</h2>
                    </div>
                
                ))}

            </div>
                :
                <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47m700mutgull7h7bmua0nussja7i9urrh9so7r4g7&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{width:550, height:550,marginLeft:400}}/>
            }



        </div>
    )
}

export default ProductFromBackend