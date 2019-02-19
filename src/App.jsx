import React from 'react';
import style from './main.scss';
import wandoo from './assets/wandoo-sketch-01.gif';

const App = () => (
  <div className={style.main}>
    <h1>A simple react template</h1>
    <img src={wandoo} alt="wandoo" />
  </div>
);

export default App;
