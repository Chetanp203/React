import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../Context/Auth.context";

function Login() {
    const { state, login } = useContext(AuthContext);
    // console.log(state,"state from context in login")

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
                    login(users[i]);

                    alert("Login successfull.");
                    setUserData({ email: "", password: "" })
                    router('/home');
                    break;
                }
            }

            if (flag == false) {
                return alert("Please check credentails.")
            }

        } else {
            alert("All fields are mandatory")
        }
    }

    return (
        <div style={{ width: '400px', height: '550px', margin: 'auto' }}>
            <div style={{ width: '100%', height: '250px', backgroundColor: 'black', color: 'white',padding:'20px' }}>
                <h3 style={{textAlign:'right',paddingBottom:'150px'}}>Skip</h3>
                <h1>Login/Signup</h1>
                <h3>for a tailored experience</h3>
            </div>

            
            <form onSubmit={handleSubmit} style={{ fontSize: '30px',width:'100%',height:'300px',textAlign:'center',}}>
                
                <div style={{width:'350px',borderBottom:'1px solid black',textAlign:'center',margin:'30px'}}>
                <input type="email" name='email' onChange={handleChange} style={{width:'350px',height:'30px',border:'none',fontSize:'18px'}} placeholder="Email Id*" /><br />
                </div>
                
                <div style={{width:'350px',borderBottom:'1px solid black',textAlign:'center',margin:'30px'}}>
                <input type="password" name="password" onChange={handleChange} style={{width:'350px',height:'30px',border:'none',fontSize:'18px'}} placeholder="Password*" /><br />
                </div>

                <input type="submit" value='Continue' style={{ width: '350px', height: '40px', backgroundColor: 'black', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }} /><br />
                <span style={{ fontSize: '14px' }}>Don't have an account?<span onClick={() => router("/register")} style={{ cursor: 'pointer' }}><b>Register here</b></span></span>

            </form>
            

        </div>
    )
}

export default Login;