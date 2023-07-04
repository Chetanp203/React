import React from 'react';

const Swaraj = ({ children }) => {
    return (
        <button>
            {children} 
        </button>
    );
};

const ChildernProp = () => {
    return (
        <div>
            <Swaraj>Login</Swaraj> 
        </div>
    );
};

export default ChildernProp