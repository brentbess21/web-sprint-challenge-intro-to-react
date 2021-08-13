// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';


const StyledCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    width: 50%;
    height: 500px;
    margin: 25px auto;
    background-color: black;
    color: white;

    h3 {
        font-size: 2.5rem;
    }

    button{
        width: 220px;
        font-family: 'Titillium Web', sans-serif;
        padding: 10px 20px;
        border:3px solid #ffe81f;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        color: white;
        text-align:center;
        transition: all 0.15s;
        background-color: black;
        }
    button:hover{
         color:#DDDDDD;
         border-color:white;
        background-color: black;
        }

`


const Character = (props) => {
    const { character } = props
    const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

   const cmtoFeet = (cm) => {
       const inches = cm/2.54;
       const feet = Math.floor(inches/12);
       const remainingInches = (inches/12 - feet) *12;
       return `${feet}'${Math.round(remainingInches)}`
   }

   const kilosToPounds = (kilos) => {
       return `${Math.round(kilos * 2.205)} lbs.`
   }

   
    return (
        <StyledCard>
            <h3>{character.name}</h3>
            <button  onClick={toggle} >More Info</button>
            <Collapse isOpen={isOpen}>
            <div className='character-data'>
                <p>Birth Year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Height: {cmtoFeet(character.height)} </p>
                <p>Weight: {kilosToPounds(character.mass)}</p>
            </div>
            </Collapse>
        </StyledCard>
    )
}

export default Character; 