import React, { useState } from 'react'
import './DynamicClasses.css'

const DynamicClasses = () => {

    const[isButtonActive, setIsButtonActive]= useState(false);

    const handleButtonClick = () =>{
        setIsButtonActive(!isButtonActive);
    };
  return (
    <button className={isButtonActive ? 'active-button' : 'inactive-button' } onClick={handleButtonClick} >
    Login
    </button>
  )
}

export default DynamicClasses


