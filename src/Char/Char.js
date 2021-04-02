import React from 'react';
import './Char.css';

const Char = (props) => {

    return (
        <div onClick={props.clicked}>
            <p className="Char">{props.character}</p>
        </div>
    )
}

export default Char;