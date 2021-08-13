import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CharacterList from './components/CharacterList';
import Search from './components/Search'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [charIndex, setCharIndex] = useState(null)

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

  const seeFullList = () => {
    setCharIndex(true);
  }

  const getRandomChar = () => {
    const randomIndex = Math.floor(Math.random()*6 +1);
    setCharIndex(characterList[randomIndex]);
  
  }



  return (
    <div className="App">
      <Search setSearchTerm={setSearchTerm} setCharIndex={setCharIndex} />
      {charIndex 
      ? <CharacterList characterList={getFilteredChars()}/> 
      : <h1 className="Header">Welcome to the Star Wars Character Guide</h1> }
      {charIndex 
      ? <p></p>
      : <p>With this nifty little website, you can learn all about some of your favorite characters from a galaxy far, far away. To get started, click on one of the buttons below! </p>}

      <button onClick={getRandomChar}>Get Started</button>
      <button onClick={seeFullList}>See Full List</button>
    </div>
  );
}

export default App;
