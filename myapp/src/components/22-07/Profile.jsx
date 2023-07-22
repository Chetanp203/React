import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/Auth.context';

const Profile = () => {
    const {login} = useContext(AuthContext)

    const [userData, setUserData] = useState({});
    const router = useNavigate();

    useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem("Current-user"));
         if(!currentuser){
            router("/login")
         }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if(currentuser && allUsers){
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentuser.email && allUsers[i].password == currentuser.password) {
                setUserData(allUsers[i])
            }
        }
    }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentuser = JSON.parse(localStorage.getItem("Current-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentuser.email && allUsers[i].password == currentuser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentuser.password = userData.password; 
                currentuser.name = userData.name;
            }
        }
        login(currentuser)
        localStorage.setItem("Current-user", JSON.stringify(currentuser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile Updated")
    }
    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Change Name</label><br />
                <input type="text" value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Change Password</label><br />
                <input type="text" value={userData.password} name="password" onChange={handleChange} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Profile