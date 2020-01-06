import React, { useState, useEffect } from 'react';
import logo from './assets/images/svg/logo-maxkalik.svg';
import styles from './assets/styles/main.scss';

const app = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  if (spinner) {
    return null;
  }

  return (
    <div className={styles.main}>
      <img className={styles.logo} src={logo} alt="logo maxkalik.com" />
      <h1>A simple react template</h1>
      <p>© 2019 <a href="http://www.maxkalik.com">maxkalik.com</a></p>
    </div>
  );
};

export default app;
