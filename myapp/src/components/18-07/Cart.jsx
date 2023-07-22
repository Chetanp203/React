import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Cart = () => {
    const [finalPrice, setFinalPrice]=useState(0);

    const [userCart, setUserCart] = useState([]);
    const router = useNavigate();

    console.log(userCart, "-userCart");

    useEffect(() => {
        if(userCart.length){
        var totalPrice = 0;
       for (var i=0; i < userCart.length; i++){
        totalPrice += userCart[i].price
       }
       setFinalPrice(totalPrice)
    }
    },[userCart])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please login to view cart products");
            router("/login")
        }
    }, [])

    function buyProduct(){
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0);
        setUserCart([]);
        alert("Order placed product will be delivered soon!!")
    }
    return (
        <div>
            <h1>Cart</h1>
            <div style={{ display: 'flex' ,justifyContent:'space-around'}}>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' ,width:'65%'}}>
                    {userCart && userCart.map((pro) => (
                        <div style={{ width: '18%', padding: '20px', marginBottom: '20px', borderRadius: '5px' ,cursor:'pointer',backgroundColor:'lightgrey'}}>
                            <img style={{ width: '95%', height: '250px' }} src={pro.image} />
                            <h4>Title:{pro.title}</h4>
                            <h4>Category:{pro.category}</h4>
                            <h2>Price:{pro.price}.$</h2>

                        </div>
                    )
                    )}
                </div>
                <div style={{width:'25%',height:'500px',padding:'20px',backgroundColor:'lightblue',color:'blue',borderRadius:'5px'}}>
                    <h1>Total</h1>
                    <h3>Total MRP  :$.{finalPrice+finalPrice}</h3>
                    <h3>Price after Discount  :$.{finalPrice}</h3>
                    <button onClick={buyProduct} style={{width:'200px',height:'40px',backgroundColor:'blue',color:'white',marginTop:'30px',border:'none',cursor:'pointer'}}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart