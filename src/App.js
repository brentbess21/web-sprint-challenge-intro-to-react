import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CharacterList from './components/CharacterList';
import Search from './components/Search'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterList, setCharacterList] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        console.log(res.data);
        const characterData = res.data;
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

  return (
    <div className="App">
      <Search setSearchTerm={setSearchTerm} />
      <h1 className="Header">Star Wars Characters</h1>
      <CharacterList characterList={getFilteredChars()}/>
    </div>
  );
}

export default App;
