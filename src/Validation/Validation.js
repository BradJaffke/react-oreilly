import React from 'react';

const Validation = (props) => {
    let inputString = "Text too short";

    if (props.inputLength > 5) {
        inputString = "Text long enough";
    }

    return (
            <div>
                <p>{inputString}</p>
            </div>
        )
}

export default Validation;