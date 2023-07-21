import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
    const[isUserLoggedIn, setIsUserLoggedIn]=useState(false);
    const [currentUserEmail, setCurrentUserEmail]=useState("");
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    const router = useNavigate();
    // console.log(products, "- products")
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    useEffect(() =>{
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "user")
        if(user){
            setIsUserLoggedIn(true);
            setCurrentUserEmail(user.email)
        }
    },[])

    useEffect(() => {
        if (id && products.length) {
            const result = products.find((product) => product.id == id);
            setSingleProduct(result)
        }
    }, [id, products])


    console.log(singleProduct, "- singleProduct")

    
    function addCart() {
        if (isUserLoggedIn) {
            const users = JSON.parse(localStorage.getItem("Users"));

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUserEmail) {
                    users[i].cart.push(singleProduct);
                    localStorage.setItem("Users", JSON.stringify(users));
                    break;
                }
            }
            alert("Added to cart")
            router("/product-from-backend")
        } else {
            alert("Login to add items to cart..")
        }
       
    }
    

    return (
        <div style={{ display: 'flex', justifyContent: "space-evenly" ,padding:'50'}}>
            <div style={{ width: "30%", height: "500px", cursor:'pointer',
                        padding:'20px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
                <img style={{ width: "45%", height: "45%" ,border:'1px solid black',padding:'7px'}} src={singleProduct.image} />
                <img style={{ width: "45%", height: "45%" ,border:'1px solid black',padding:'7px'}} src={singleProduct.image} />
                <img style={{ width: "45%", height: "45%" ,border:'1px solid black',padding:'7px'}} src={singleProduct.image} />
                <img style={{ width: "45%", height: "45%" ,border:'1px solid black',padding:'7px'}} src={singleProduct.image} />
            </div>
            <div style={{ width: "40%", height: "500px",backgroundColor:"lightblue" ,padding:'20px'}}>
                <h1>Name :{singleProduct.title}</h1>
                <br />
                <h4>Category: {singleProduct.category}</h4>
                <br />
                <h5 style={{paddingTop:'30px', paddingBottom:'30px'}}>Description: {singleProduct.description}</h5>
                <h1>Price : Rs.{singleProduct.price}</h1>
                <button onClick={addCart} style={{width:'350px',height:'50px',fontWeight:'bolder',fontSize:'20px',backgroundColor:'black',color:'white',border:'none',borderRadius:'5px',marginTop:'50px'}}>Add to cart</button>
            </div>
        </div >
    )
    }


export default Product;