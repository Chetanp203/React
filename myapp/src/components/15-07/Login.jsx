import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; // re-assign
                    break;
                }
            }

            if (flag == false) {
                return alert("Please check credentails.")
            }else{
                localStorage.setItem("Current-user",
                JSON.stringify(userData))
            
            alert("Login successfull.");
            setUserData({ email: "", password: "" })
            router('/home');
            }
        } else {
            alert("All fields are mandatory")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{border:'1px solid black',width:'250px',height:'300px',backgroundColor:'lightcyan',fontSize:'30px',padding:'50px',margin:'auto'}}>
                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type="password" name="password" onChange={handleChange} /><br />
                <input type="submit" value='Login' style={{width:'250px',height:'40px',backgroundColor:'blueviolet',border:'none',borderRadius:'5px',color:'white'}} /><br />
            </form>
        </div>
    )
}

export default Login;