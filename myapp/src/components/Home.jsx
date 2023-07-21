import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

function Home(){
    const {state, login,logout} =useContext(AuthContext);
    // console.log(state,"state from context in home")
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        if(state?.user?.email){
            setIsUserLoggedIn(true);
        }else{
            setIsUserLoggedIn(false);
        }
    },[state])

   
    return (
       <div style={{textAlign:'center',height:'500px'}}>
        <h1>Welcome to the store User!!</h1>
        <div>
            {isUserLoggedIn ? <button onClick={()=> logout()} style={{padding:'10px 20px',fontSize:'20px'}}>Logout</button>: <button onClick={() => router("/login")}>Login</button>}
        </div>
       </div>
    )
}

export default Home;