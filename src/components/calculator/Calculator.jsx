import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/calculate';
import '../styles/calculator/Calculator.css';

const Calculator = () => {
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
    <div className="calculator">
      <h2 className="calculator__title">Let&apos;s do some math!</h2>
      <div className="calculator__calc">
        <Display result={next || total} />
        <ButtonPanel onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
