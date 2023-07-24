import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

function Navbar() {
    const { state, login, logout } = useContext(AuthContext);
    // console.log(state,"state from context in navbar")
    
    const router = useNavigate();
    const [user, setUser] = useState();

   

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        } else {
            setUser({});
        }
    }, [state])


    return (
        <div style={{ width: '100%', height: '55px',display:'flex' }}>
            <div style={{ width: '100%', height: '55px', justifyContent: 'space-around', textAlign: 'center', display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '35%', alignItems: 'center', color: 'grey' }}>
                <h4>First Citizen Club</h4>
                <h4>All Stores</h4>
                <h4>Help & Support</h4>
            </div>
            <div style={{ width: '30%' }}>
                <img onClick={() => router('/home')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5uZbGCtoz7XKYAn_2pqcVoOTTNcYgKGKww&usqp=CAU" style={{ width: '60%', height: '55px' }} />
            </div>
            <div style={{ width: '35%', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                {user?.email ?
                    <>
                        <div style={{ display: 'flex', width: '60%', borderBottom: '1px solid grey', position: 'relative' }}>
                            <input type="text" placeholder="Search Products & Brands" style={{ width: '100%', height: '45px', border: 'none', fontSize: '18px' }} />
                            <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: '#000000', position: 'absolute', top: '20px', left: '240px' }}></i>
                        </div>
                        {/* <h3 onClick={() => router('/product-from-backend')} style={{cursor:'pointer'}}>Products</h3> */}
                        {/* <h3 style={{marginLeft:'10px',cursor:'pointer'}} onClick={() => router("/profile")}>Profile-{user?.name}</h3> */}
                        {/* <h3 onClick={() => router('/cart')} style={{marginLeft:'10px',cursor:'pointer'}}>Cart</h3> */}
                        <i onClick={() => router('/product-from-backend')} className="fa-regular fa-heart fa-xl" style={{ color: '#000000', marginLeft: '20px' }}></i>

                        <i onClick={() => router('/cart')} className="fa-solid fa-bag-shopping fa-xl" style={{ color: '#000000', marginLeft: '20px' }}></i>

                        <i onClick={()=> router('/profile')} className="fa-regular fa-circle-user fa-xl" style={{ color: '#000000', marginLeft: '20px' }}></i>
                        <h3 onClick={logout} style={{marginLeft:'10px',cursor:'pointer'}}>Logout</h3>
                    </>
                    :
                    <h3 onClick={() => router('/login')} style={{textAlign:'right',width:'100%'}}>Login</h3>
                }
            </div>
            
            </div>

        </div>
    )
}
export default Navbar