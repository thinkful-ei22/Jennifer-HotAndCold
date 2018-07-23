import React from 'react';
import Form from './form.js';
import GuessDisplay from './guessDisplay.js';
import GuessList from './guessList.js';
import './styles/game.css';

export default function Game(props){
  return (
    <section className='game'>
      <h2>{props.message}Make your guess!</h2>
      <Form />
      <GuessDisplay />
      <GuessList />
    </section>
  );
}