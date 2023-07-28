import React, { useState } from 'react'
import { json } from 'react-router';
import { useNavigate } from 'react-router';

const Register = () => {
    const [userData, setUserData] = useState({name:"", email:"",password:""});
    const router = useNavigate();

    const handleChange= (event) => {
       setUserData({...userData, [event.target.name] : event.target.value})
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password){
            const array = JSON.parse(localStorage.getItem("Users")) || [];

            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart:[]
            };
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull!!!")
            router('/login')
        } else {
            alert("All fields mandatory")
        }
    }
  return (
    // <div>
    //     <h1>Register</h1>
    //     <form  onSubmit={handleSubmit} style={{border:'1px solid black',width:'250px',height:'350px',backgroundColor:'yellow',fontSize:'30px',padding:'50px',margin:'auto'}}>
    //         <label >Name:</label><br />
    //         <input type="text" name='name'  onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
    //         <label >Email:</label><br />
    //         <input type="text" name='email' onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
    //         <label >Password: </label><br />
    //         <input type="text" name='password' onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
    //         <input type="submit" value="Register" style={{width:'250px',height:'40px',backgroundColor:'red',border:'none',borderRadius:'5px',color:'white',marginTop:'20px'}} /><br />
    //         <span>Already have an account?<span></span></span>
    //     </form>
    // </div>

    <div style={{ width: '400px', height: '600px', margin: 'auto' }}>
            <div style={{ width: '100%', height: '250px', backgroundColor: 'black', color: 'white',padding:'20px' }}>
                <h3 style={{textAlign:'right',paddingBottom:'150px'}}>Skip</h3>
                <h1>Signup</h1>
                <h3>for a tailored experience</h3>
            </div>

            
            <form onSubmit={handleSubmit} style={{ fontSize: '30px',width:'100%',height:'300px',textAlign:'center',}}>
                
                <div style={{width:'350px',borderBottom:'1px solid black',textAlign:'center',margin:'30px'}}>
                <input type="text" name='name' onChange={handleChange} style={{width:'350px',height:'30px',border:'none',fontSize:'18px'}} placeholder="Full name*" /><br />
                </div> 

                <div style={{width:'350px',borderBottom:'1px solid black',textAlign:'center',margin:'30px'}}>
                <input type="email" name='email' onChange={handleChange} style={{width:'350px',height:'30px',border:'none',fontSize:'18px'}} placeholder="Email Id*" /><br />
                </div>
                
                <div style={{width:'350px',borderBottom:'1px solid black',textAlign:'center',margin:'30px'}}>
                <input type="password" name="password" onChange={handleChange} style={{width:'350px',height:'30px',border:'none',fontSize:'18px'}} placeholder="Password*" /><br />
                </div>

                <input type="submit" value='Continue' style={{ width: '350px', height: '40px', backgroundColor: 'black', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }} /><br />
                <span style={{ fontSize: '14px' }}>Already have an account?<span onClick={() => router("/login")} style={{ cursor: 'pointer' }}><b>Login here</b></span></span>

            </form>
            

        </div>




  )
}

export default Register