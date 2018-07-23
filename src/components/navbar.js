import React from 'react';
import './styles/navbar.css';
export default function Navbar(props){
  return (
    <nav>
      <ul className='clearfix'>
        <li><a className="what" href="#">What ?</a></li>
        <li><a className="new" href="#">+ New Game</a></li>
      </ul>
    </nav>
  );
}
