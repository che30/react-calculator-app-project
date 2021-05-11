import React from 'react';
import Button from './Button';

const Buttonpanel = () => (
  <div className="buttons-div">
    <div className="board-row">
      <Button name="AC" className="asee" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="/" className="operation" />
    </div>
    <div className="board-row">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="*" className="operation" />
    </div>
    <div className="board-row">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" className="operation" />
    </div>
    <div className="board-row">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" className="operation" />
    </div>
    <div className="board-row last">
      <Button name="0" />
      <Button name="." />
      <Button name="=" className="operation" />
    </div>

  </div>
);
export default Buttonpanel;
