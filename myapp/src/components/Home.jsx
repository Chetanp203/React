import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home(){
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user,"-user")
        if(user){
            setIsUserLoggedIn(true);
        }
    })

    function logout(){
        localStorage.removeItem("Current-user");
        setIsUserLoggedIn(false);
        alert("Logout Successfull!!")
    }
    return (
       <div style={{textAlign:'center'}}>
        <h1>Welcome to the store User!!</h1>
        <div>
            {isUserLoggedIn ? <button onClick={logout} style={{padding:'10px 20px',fontSize:'20px'}}>Logout</button>: <button onClick={() => router("/login")}>Login</button>}
        </div>
       </div>
    )
}

export default Home;