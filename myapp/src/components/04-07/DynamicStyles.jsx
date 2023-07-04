import React, { useState } from 'react'

const DynamicStyles = () => {
    const[backgroundColor, setBackgroundColor]= useState('red');
    const handleButtonClick=() => {
        setBackgroundColor('blue');
    };
    const styles={
        backgroundColor: backgroundColor,
        color: 'yellow',
        padding: '10px',
        borderRadius: '5px',
        cursor:'pointer'
    }
  return (
    <div style={styles} onClick={handleButtonClick}>
        Click to change colour!!!
        </div>
  );
};

export default DynamicStyles


