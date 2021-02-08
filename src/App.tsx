import React from 'react';
import CardSet, { CardData } from './components/CardSet';

import './App.css';

const cardData: CardData[] = [
  {
    id: 6,
    backgroundColor: 'rgba(0, 0, 80, 0.75)',
    title: 'Chakra du 3e Œil',
    message: 'Quel est le message de mon intuition ?',
    textColor: 'white'
  }, {
    id: 4,
    backgroundColor: 'rgba(0, 255, 0, 0.75)',
    title: 'Chakra du Cœur',
    message: 'Quel est le message de mon cœur ?'
  }, {
    id: 2,
    backgroundColor: 'rgba(255, 128, 0, 0.75)',
    title: 'Chakra Sacré',
    message: 'Quel est le blocage caché en moi ?'
  }, {
    id: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.75)',
    title: 'Chakra Racine',
    message: 'Quelle est la situation dans laquelle je me trouve ?'
  }, {
    id: 3,
    backgroundColor: 'rgba(255, 255, 0, 0.75)',
    title: 'Chakra du Plexus Solaire',
    message: 'Comment agir pour surmonter ce blocage ?'
  }, {
    id: 5,
    backgroundColor: 'rgba(0, 0, 255, 0.75)',
    title: 'Chakra de la Gorge',
    message: 'Qu\'est-ce qui a besoin d\'être dit ?',
    textColor: 'white'
  }, {
    id: 7,
    backgroundColor: 'rgba(64, 0, 255, 0.75)',
    title: 'Chakra Coronal',
    message: 'Quelle est la compréhension générale de ce tirage ?',
    textColor: 'white'
  }
]

function App() {
  return (
    <div className="App">
      <CardSet cardData={cardData} />
    </div>
  );
}

export default App;
