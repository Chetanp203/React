import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { AuthContext } from "./../../Context/Auth.context";
import "./../18-07/Cart.css"

const Cart = () => {
    const { state, login, logout } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);

    const [userCart, setUserCart] = useState([]);
    const router = useNavigate();

    console.log(userCart, "-userCart");

    useEffect(() => {
        if (userCart?.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += userCart[i].price
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])

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

    function buyProduct() {
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
        <div className='cart-container'>
            <div className="discount-offer">
                <p>10% Instant Discount on Select HDFC Bank Credit Card on minimum purchase of Rs.6000 (Maximum Discount of Rs. 800) TnC Apply</p>
            </div>
            <div className='cart-products flex'>


                <div className='left-cart'>

                    <div className='c-1'>

                        <div className='c-1-1 flex'>
                            <div>
                                <p><b>Delivery options available</b></p>
                                Please Select Your Delivery Option
                            </div>
                            <button>Slect Your pincode</button>
                        </div>

                        <div className="c-1-2 flex">
                            <div style={{ marginRight: '60px', alignItems: 'center' }}>
                                <input type="radio" />
                                <label><b>Standard Delivery</b></label>
                            </div>
                            <div style={{ marginRight: '60px' }}>
                                <input type="radio" />
                                <label><b>Express Delivery</b></label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label><b>Express Store Pickup</b></label>
                            </div>
                        </div>
                        <p className='green'><b>Typically delivers between 3-5 day*</b></p>


                    </div>

                    <div className="c-2">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h06/hee/30234028605470/SAVE23-Coupon-Code-1840x250-Web----new-code--2023-06--22--cart-page.jpg" />
                    </div>

                    <h2>ITEMS (2)</h2>


                    <div className='c-3'>
                        {userCart && userCart.map((pro) => (
                            <div style={{ width: '100%', marginBottom: '20px', cursor: 'pointer', backgroundColor: 'white' }}>
                                <div style={{ display: 'flex', width: '100%', borderBottom: '1px solid #ccc' }}>
                                    <img style={{ width: '18%', height: '150px', padding: '20px' }} src={pro.image} />
                                    <div className='c-3-1'>
                                        <h3>{pro.title}</h3>
                                        <p>{pro.category}</p>
                                        <div style={{ width: '50%', display: 'flex' }}>
                                            <button>Size: 8</button>
                                            <button>Qty: 1</button>
                                        </div>
                                    </div>

                                    <div className='c-3-2'>
                                        <span><b>$.{pro.price}</b><strike><span>$.{pro.price + pro.price}</span></strike><span className='orange'><b>50% off</b></span></span>
                                        <p className='green'>Price Dropped by $.<b>{pro.price}</b></p>
                                        <div style={{ marginTop: '90px', display: 'flex', alignItems: 'center' }}>
                                            <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#fba209' }}></i>
                                            <p><b>1 Offer</b>applied for this product</p>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <button style={{ width: '50%', height: '40px', border: 'none', backgroundColor: 'white' }}>REMOVE</button>
                                    <button style={{ width: '50%', height: '40px', border: 'none', backgroundColor: 'white' }}>MOVE TO WISHLIST</button>
                                </div>

                            </div>
                        )
                        )}
                    </div>

                </div>


                <div className='right-cart'>
                    <div className='cart-coupon'>
                        <h3>Apply Coupon</h3>
                        <div >
                            <input type="text" placeholder='Enter promo/coupon code' />
                            <button><b>Apply</b></button>
                        </div>
                    </div>

                    <div style={{ width: '90%', backgroundColor: 'white', padding: '30px 20px', margin: '20px 0px' }}>
                        <input type="checkbox" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
                        <label><b>Gift Wrap</b></label>
                    </div>

                    <div className='cart-checkout'>
                        <h3>Order Summary</h3>
                        <div className='flex' style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
                            <div className="check-l">
                                <p>Sub total</p>
                                <p>Delivery charges</p>
                                <p>Offer Discount</p>
                                <p>Coupon Discount</p>
                            </div>
                            <div className="check-r">
                                <h3>$.{finalPrice}</h3>
                                <h3 className='green'>Free</h3>
                                <h3>$.{finalPrice}</h3>
                                <h3>Apply Coupon</h3>
                            </div>
                        </div>
                        <div className='flex' style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
                            <h2>Total Price  </h2>
                            <h2 className='orange'>$.{finalPrice + finalPrice}</h2>

                        </div>
                        
                        <div className='flex'>
                            <h3 style={{color:'grey'}}>Total Savings  </h3>
                            <h3>$.{finalPrice + finalPrice}</h3>

                        </div>

                    </div>
                        <button onClick={buyProduct} style={{ width: '100%', height: '50px', backgroundColor: 'black', color: 'white',  border: 'none', cursor: 'pointer',fontSize:'20px' }}>CHECKOUT</button>




                </div>


            </div>


        </div>


    )
}

export default Cart