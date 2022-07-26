import React from 'react';

export const Button = ({ label, bgColor, primary}) => {
    return(
        <button style={{background: bgColor, color: primary ? 'white' : 'black'}}>{label}</button>
    )
}