import React from 'react';
import Buttonpanel from './Buttonpanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../index.css';

calculate(1, 2, '-');

const App = () => (
  <div className="main">
    <h1 className="text-center">Basic  Calculator</h1>

    <Display />

    <Buttonpanel />
  </div>
);
export default App;
