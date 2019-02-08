import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './main.css';

const Index = () => {
  return (
    <div className={style.main}>
      Hello World
      <App />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById('index'));