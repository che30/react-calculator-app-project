import React, { useState } from 'react';
import Buttonpanel from './Buttonpanel';
import Display from './Display';
import Calculate from '../logic/calculate';
import '../index.css';

const App = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    const result = Calculate(calculator, buttonName);
    setCalculator({ ...result });
  };

  const result = calculator;
  return (
    <div className="main">
      <h1 className="text-center">Basic  Calculator</h1>

      <Display result={result} />

      <Buttonpanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
