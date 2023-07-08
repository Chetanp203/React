import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const FormSingleState = () => {
      const [userData, setUserData]=useState({name:"", email:"", password:""})

      const router = useNavigate();

      function handleChange(event){
        setUserData({...userData,[event.target.name]: event.target.value});
      }

      async function handleSubmit(event){
        event.preventDefault();

        if(!userData.name) return alert("Name field empty")
        if(!userData.email) return alert("Email field empty")
        if(!userData.password) return alert("Password field empty")
        if(userData.password.length < 7) return alert("Password must be more than 7 digits")
      

      setUserData({name:"", email:"",password:""})
      alert("Registered Successfully")
      router('/home')
      }
  return (
    <div>
        <fieldset style={{width:300 , backgroundColor:'aqua' ,margin:'auto'}}>
        <form onSubmit={handleSubmit} >

            <label>Name:</label><br/>
            <input type="text" value={userData.name} name='name' onChange={handleChange}/><br/>
        
            <label>Email:</label><br/>
            <input type="email" value={userData.email} name='email' onChange={handleChange}/><br/>
        
            <label>Password:</label><br/>
            <input type="password" value={userData.password} name='password' onChange={handleChange}/><br/>
            <input type="submit" value="Register" style={{backgroundColor:'black', color:'white',fontSize:18,margin:10}}/>
        </form>
        </fieldset>
    </div>
  )
}

export default FormSingleState