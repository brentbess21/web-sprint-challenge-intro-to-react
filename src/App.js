import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import CharacterList from './components/CharacterList';
import Search from './components/Search'


const StyledApp = styled.div `
  p {
    width: 50%;
    margin: 30px auto;

  }

  h1 {
    font-size: 3rem;
    margin: 30px 0;
  }
  button{
    width: 220px;
    font-family: 'Titillium Web', sans-serif;
    padding: 10px 20px;
    border:3px solid black;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    color: white;
    text-align:center;
    transition: all 0.15s;
    background-color: black;
    }
button:hover{
     color:black;
     border-color:black;
    background-color: white;
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  // const [charIndex, setCharIndex] = useState(null);

  useEffect(()=>{
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        const characterData = res.data;
        console.log(characterData)
          setCharacterList(characterData);
      })
      .catch(err => {
        console.error(err);
      })
  },[])

  const getFilteredChars = () => {
    const filteredChars = characterList.filter(char => {
      return char.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return filteredChars;
  }



  // const seeFullList = () => {
  //   setCharIndex(true);
  // }

  // const getRandomChar = () => {
  //   const randomIndex = Math.floor(Math.random()*6);
  //   setCharIndex(characterList[randomIndex]);
  // }



  return (
    <StyledApp className="App">
      <Search setSearchTerm={setSearchTerm} />
      <h1 className="Header">Welcome to the <br></br>Star Wars Character Guide</h1>
      <p>With this nifty little website, you can learn all about some of your favorite characters from a galaxy far, far away. To get started, click on the button below! </p>
      <CharacterList characterList={getFilteredChars()}/>
      <button>See Full List</button>
    </StyledApp>
  );


// Worked on more functionality with this return, but it made the tests fail

// return (
//   <StyledApp className="App">
//     <Search setSearchTerm={setSearchTerm} setCharIndex={setCharIndex} />
//     {charIndex 
//     ? <CharacterList characterList={getFilteredChars()}/> 
//     : <h1 className="Header">Welcome to the <br></br>Star Wars Character Guide</h1> }
//     {charIndex 
//     ? <p></p>
//     : <p>With this nifty little website, you can learn all about some of your favorite characters from a galaxy far, far away. To get started, click on the button below! </p>}

//     {/* <button onClick={getRandomChar}>Get Started</button> */}
//     <button onClick={seeFullList}>See Full List</button>
//   </StyledApp>
// );
}

export default App;
