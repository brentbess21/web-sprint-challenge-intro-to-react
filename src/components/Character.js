// Write your Character component here
import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';

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
        <div>
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
        </div>
    )
}

export default Character; 