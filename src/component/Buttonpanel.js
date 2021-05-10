import React from 'react';
import Button from './Button';

const Buttonpanel = () => (
  <div>
    <div className="board-row">
      <Button value="AC" />
      <Button value="+" />
      <Button value="%" />
      <Button value="/" className="operation" />
    </div>
    <div className="board-row">
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="*" className="operation" />
    </div>
    <div className="board-row">
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" className="operation" />
    </div>
    <div className="board-row">
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" className="operation" />
    </div>
    <div className="board-row">
      <span><renderButton name="0" /></span>
      <renderButton value="." />
      <renderButton value="=" className="operation" />
    </div>

  </div>
);
export default Buttonpanel;
