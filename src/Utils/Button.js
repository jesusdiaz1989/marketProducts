import React from 'react';
import './Button.css';

function Button(props) {
    return(
        <>
            <button 
                type={props.type} 
                className={props.classStyle}
                onClick={props.onClick}
                > 
                {props.value} 
            </button>
        </>
    );
}

export default Button;