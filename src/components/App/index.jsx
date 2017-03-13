import React from 'react';
import Money from '../Money';
import Tip from '../Tip';
import './reset.css';
import './styles.css';

const App = () => (
  <div className="game-board">
    <h1>Buen Cartón</h1>
    <Money />
    <Tip />
  </div>
);

export default App;
