import React from 'react';
import ReactDOM from 'react-dom';
import * as style from './main.css';

const Index = () => {
  return <div className={style.main}>Hello World</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));
