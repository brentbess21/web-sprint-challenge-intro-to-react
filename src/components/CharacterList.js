import React from 'react';
import styled from 'styled-components';
import Character from "./Character"

const StyledContainer = styled.div `
    width: 80%;
    margin: 0 auto;
    h1 {
        margin: 50px;
        font-size: 3.5rem;
        text-transform: uppercase;
        border-bottom: 2px solid black;
    }
`

const CharacterList = (props) => {
    const { characterList } = props
    return (
        <StyledContainer className ="characters-container">
            <h1>Character List</h1>
            { characterList && characterList.map(character => {
                return <Character character={character} key={character.created}/>
            })}
        </StyledContainer>
    )
}

export default CharacterList; 