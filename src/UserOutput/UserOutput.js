import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div>
            <p className="UserOutput">BLAH BLAH BLAH</p>
            <p className="UserOutput">PARAGRAPH 2 PARAGRAPH 2</p>
            <p className="UserOutput">My username is: {props.username}</p>
        </div>
    )
}

export default useroutput;