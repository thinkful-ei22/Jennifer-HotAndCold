import React from 'react';
import './styles/guessList.css';

export default function GuessList(props){
  return (
    <ul id="guessList" className="guessBox clearfix">
      <li>{props.guess}Sample Guess</li>
    </ul>
  );
}