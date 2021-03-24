import React from 'react';
import './UserInput.css'

const userinput = (props) => {
    return (
        <div>
            <input className="UserInput" value={props.username} type="text" onChange={props.changed} />
        </div>
    )
}

export default userinput;