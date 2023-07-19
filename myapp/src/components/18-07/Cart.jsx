import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Cart = () => { 

    const [userCart, setUserCart] = useState([]);
    const router = useNavigate();

    console.log(userCart, "-userCart");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if(user?.email){
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for(var i=0; i < allUsers.length; i++){
                if(allUsers[i].email == user.email && allUsers[i].password == user.password){
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        }else{
            alert("Please login to view cart products");
            router("/login")
        }
    },[])
  return (
    <div>
        <h1>Cart</h1>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
         {userCart.length && userCart.map((pro) => (
            <div style={{width:'18%', border:'1px solid black',padding:'30px',marginBottom:'20px',borderRadius:'5px'}}>
            <img style={{width:'100%', height:'300px'}} src={pro.image} />
            <h3>Title:{pro.title}</h3>
            <h3>Category:{pro.category}</h3>
            <h2>Price:{pro.price}.RS</h2>

            </div>
         )
         )}
        </div>
    </div>
  )
}

export default Cart