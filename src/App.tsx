import React from 'react';
import FirstSetion from './components/FirstSection';
import SecondSetion from './components/SecondSection';
import ThirdSetion from './components/ThirdSection';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirstSetion />
      <SecondSetion />
      <ThirdSetion />
    </div>
  );
}

export default App;
