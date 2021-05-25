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
    console.log(result);
    setCalculator({ ...result });
  };

  return (
    <div className="main">

      <Display
        total={calculator.total}
        next={calculator.next}
        operation={calculator.operation}
      />

      <Buttonpanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
