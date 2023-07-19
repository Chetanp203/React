import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

function Navbar(){
    const router = useNavigate();
    const [user, setUser] = useState();

    useEffect(()=> {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
        if (isUserPresent){
            setUser(isUserPresent)
        }
    })

    function logout() {
        localStorage.removeItem("Current-user")
        setUser({})
    }
    return(
        <div style={{width:'100%', height:'50px',backgroundColor:'black',color:'white',justifyContent:'space-around',textAlign:'center',display:'flex'}}>
           <div style={{width:'10%'}}>
            <h1 style={{cursor:'pointer'}} onClick={() => router('/home')}><em>Awdiz</em></h1>
           </div>
           <div style={{width:'80%', display:'flex',justifyContent:'right',alignItems:'center'}}>
            {user?.email ?
            <>
            <h3 onClick={() => router('/product-from-backend')} style={{cursor:'pointer'}}>Products</h3>
            <h3 style={{marginLeft:'30px',cursor:'pointer'}}>Profile</h3>
            <h3 onClick={logout} style={{marginLeft:'30px',cursor:'pointer'}}>Logout</h3>
            <h3 onClick={() => router('/cart')} style={{marginLeft:'30px',cursor:'pointer'}}>Cart</h3>
            </>
            :
            <h3 onClick={() => router('/login')}>Login</h3>
               }
           </div>
        </div>
    )
}
export default Navbar