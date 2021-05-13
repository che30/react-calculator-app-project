import React from 'react';
import Buttonpanel from './Buttonpanel';
import Display from './Display';
import Calculate from '../logic/calculate';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(({
      total, next, operation,
    }) => Calculate({
      total, next, operation,
    }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main">
        <h1 className="text-center">Basic  Calculator</h1>

        <Display result={total} next={next} operation={operation} />

        <Buttonpanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
