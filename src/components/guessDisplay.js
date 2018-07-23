import React from 'react';
import './styles/guessDisplay.css';

export default function GuessDisplay(props){
  return (
    <p>
            Guess #
      <span id="count">{props.guessNumber}12</span>
            !
    </p>
  );
}