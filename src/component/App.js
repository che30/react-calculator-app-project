import React from 'react';
import Buttonpanel from './Buttonpanel';
import Display from './Display';

function App() {
  return (
    <div className="main">
      <h1 className="text-center">Basic  Calculator</h1>

      <Display />

      <Buttonpanel />
    </div>
  );
}
export default App;
