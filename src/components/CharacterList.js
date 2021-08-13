import React from 'react';
import Character from "./Character"

const CharacterList = (props) => {
    const { characterList } = props
    return (
        <div className ="characters-container">
            <p>This is the Characters Container component</p>
            {characterList.map(character => {
                return <Character character={character} />
            })}
        </div>
    )
}

export default CharacterList; 