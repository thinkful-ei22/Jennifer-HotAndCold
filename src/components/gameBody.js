import React from 'react';
import Header from './header.js';
import Game from './game.js';
import './styles/gameBody.css';

export default function  GameBody(props) {
  return (
    <div>
      <Header />
      <Game />
    </div>
  );
}