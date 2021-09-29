import React from 'react';

import { useApp } from './hooks';
import styles from './App.css';

const App = () => {
  const hook = useApp();

  return (
    <div className={styles.container}>
      <div>Тест-слово: {hook.testValue}</div>
      <div>Введите новое тест-слово:<input onChange={hook.onChangeNewValue}/></div>
      <button onClick={hook.onChangeTestValue}>Сохранить</button>
    </div>
  )
};

export default App;