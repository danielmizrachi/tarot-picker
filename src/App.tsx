import React from 'react';
import CardSet, { CardData } from './components/CardSet';

import './App.css';

const cardData: CardData[] = [
  {
    id: 6,
    backgroundColor: 'rgba(40, 150, 255, 0.7)',
    title: 'Chakra du 3ᵉ Œil',
    message: 'Quel est le message de mon intuition ?',
    textColor: 'white'
  }, {
    id: 4,
    backgroundColor: 'rgba(100, 255, 100, 0.75)',
    title: 'Chakra du Cœur',
    message: 'Quel est le message de mon cœur ?'
  }, {
    id: 2,
    backgroundColor: 'rgba(255, 150, 45, 0.75)',
    title: 'Chakra Sacré',
    message: 'Quel est le blocage caché en moi ?'
  }, {
    id: 1,
    backgroundColor: 'rgba(255, 40, 40, 0.75)',
    title: 'Chakra Racine',
    message: 'Quelle est la situation dans laquelle je me trouve ?'
  }, {
    id: 3,
    backgroundColor: 'rgba(255, 255, 50, 0.7)',
    title: 'Chakra du Plexus Solaire',
    message: 'Comment agir pour surmonter ce blocage ?'
  }, {
    id: 5,
    backgroundColor: 'rgba(80, 255, 255, 0.7)',
    title: 'Chakra de la Gorge',
    message: 'Qu\'est-ce qui a besoin d\'être dit ?'
  }, {
    id: 7,
    backgroundColor: 'rgba(96, 96, 255, 0.7)',
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
