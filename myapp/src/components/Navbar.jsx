import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

function Navbar(){
    const {state, login,logout} =useContext(AuthContext);
    // console.log(state,"state from context in navbar")

    const router = useNavigate();
    const [user, setUser] = useState();

    useEffect(()=> {
       if(state?.user){
        setUser(state?.user)
       }else{
        setUser({});
       }
    },[state])

    
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