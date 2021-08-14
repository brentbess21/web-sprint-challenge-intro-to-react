// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';


const StyledCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    span {
        font-family: 'Titillium Web', sans-serif;
        text-transform: uppercase;
    }

    button{
        width: 250px;
        font-family: 'Titillium Web', sans-serif;
        margin-top: 20px;
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

    .character-data {
        display: flex;
        justify-content: space-between;
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
                <div className='data-container'>
                    <p><span>Birth Year:</span> {character.birth_year}</p>
                    <p><span>Gender:</span> {character.gender}</p>
                    <p><span>Eye Color:</span> {character.eye_color}</p>
                </div>
                <div className='data-container'>
                    <p><span>Hair Color:</span> {character.hair_color}</p>
                    <p><span>Height:</span> {cmtoFeet(character.height)} </p>
                    <p><span>Weight:</span> {kilosToPounds(character.mass)}</p>
                </div>
            </div>
            </Collapse>
        </StyledCard>
    )
}

export default Character; 