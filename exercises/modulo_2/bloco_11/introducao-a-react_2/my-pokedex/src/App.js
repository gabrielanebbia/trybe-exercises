import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokédex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
