import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './styles/App.css';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };

  const { total, next } = data;

  return (
    <>
      <Display result={next || total} />
      <ButtonPanel onClick={handleClick} />
    </>
  );
};

export default App;
