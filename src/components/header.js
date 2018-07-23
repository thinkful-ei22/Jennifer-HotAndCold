import React from 'react';
import './styles/header.css';
import Navbar from './navbar.js';

export default function Header(props){
  return(
    <header>
      <Navbar />
      <h1>HOT or COLD?</h1>
    </header>
  );
}