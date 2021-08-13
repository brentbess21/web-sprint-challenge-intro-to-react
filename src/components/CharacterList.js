import React from 'react';
import Character from "./Character"

const CharacterList = (props) => {
    const { characterList } = props
    return (
        <div className ="characters-container">
            <h1>Character List</h1>
            { characterList && characterList.map(character => {
                return <Character character={character} />
            })}
        </div>
    )
}

export default CharacterList; 