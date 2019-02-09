import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './main.scss';

const Index = () => {
  return (
    <div className={style.main}>
      <h1>Hello World</h1>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
