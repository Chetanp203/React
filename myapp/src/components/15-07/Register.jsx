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

            const userDataObj = {name: userData.name, email: userData.email, password: userData.password}
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull!!!")
            router('/login')
        } else {
            alert("All fields mandatory")
        }
    }
  return (
    <div>
        <h1>Register</h1>
        <form  onSubmit={handleSubmit}>
            <label >Name:</label><br />
            <input type="text" name='name'  onChange={handleChange}/><br />
            <label >Email:</label><br />
            <input type="text" name='email' onChange={handleChange}/><br />
            <label >Password: </label><br />
            <input type="text" name='password' onChange={handleChange}/><br />
            <input type="submit" value="Register" /><br />
        </form>
    </div>
  )
}

export default Register