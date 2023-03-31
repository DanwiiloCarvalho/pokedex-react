import './App.css';
import { Card } from '../Card'
import { useState } from 'react';

export function App() {

  function printCards() {
    const cards = [];
    for (let index = 0; index < 151; index++) {
      cards.push(<Card key={index} />);
    }
    return cards;
  }

  return (
    <main className='container'>
      <h1>Pokedex com React</h1>
      <ul className='pokemon-list'>
        {printCards()}
      </ul>
    </main>
  )
}