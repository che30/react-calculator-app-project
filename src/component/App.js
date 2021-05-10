import React from 'react';
import Buttonpanel from './Buttonpanel';
import Result from './Result';

function App() {
  return (
    <div className="main">
      <h1 className="text-center">Basic  Calculator</h1>

      <Result />

      <Buttonpanel />
    </div>
  );
}
export default App;
