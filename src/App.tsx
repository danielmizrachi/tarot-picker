import React from 'react';
import './App.css';
import Card from './components/Card';
import CardSet from './components/CardSet';

function App() {
  return (
    <div className="App">
      <CardSet>
        <Card
          id={1}
          backgroundColor="rgba(255,0,0,0.75)"
          title="Chakra Racine"
          message="Quelle est la situation dans laquelle je me trouve ?"
        />
      </CardSet>
    </div>
  );
}

export default App;
