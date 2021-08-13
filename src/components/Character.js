// Write your Character component here
import React from 'react';

const Character = (props) => {
    const { character } = props
    return (
        <div>
            <p>This is the Character Component</p>
            <p>{character.name}</p>
        </div>
    )
}

export default Character; 