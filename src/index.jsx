import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import style from './main.scss';

const Index = () => (
  <div className={style.main}>
    <h1>Hello World</h1>
    <p>Some text here</p>
    <App someInfo="Application" />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
