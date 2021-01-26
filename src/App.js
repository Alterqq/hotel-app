import React from "react";
import styles from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  return (
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <Header/>
        </div>
      </div>
  )
}

export default App;
