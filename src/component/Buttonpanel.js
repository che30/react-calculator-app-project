import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Buttonpanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <>
      <div className="buttons-div">
        <div className="board-row">
          <Button clickHandler={handleClick} name="AC" className="asee" />
          <Button clickHandler={handleClick} name="+/-" />
          <Button clickHandler={handleClick} name="%" />
          <Button clickHandler={handleClick} name="/" className="operation" />
        </div>
        <div className="board-row">
          <Button clickHandler={handleClick} name="7" />
          <Button clickHandler={handleClick} name="8" />
          <Button clickHandler={handleClick} name="9" />
          <Button clickHandler={handleClick} name="*" className="operation" />
        </div>
        <div className="board-row">
          <Button clickHandler={handleClick} name="4" />
          <Button clickHandler={handleClick} name="5" />
          <Button clickHandler={handleClick} name="6" />
          <Button clickHandler={handleClick} name="-" className="operation" />
        </div>
        <div className="board-row">
          <Button clickHandler={handleClick} name="1" />
          <Button clickHandler={handleClick} name="2" />
          <Button clickHandler={handleClick} name="3" />
          <Button clickHandler={handleClick} name="+" className="operation" />
        </div>
        <div className="board-row last">
          <Button clickHandler={handleClick} name="0" />
          <Button clickHandler={handleClick} name="." />
          <Button clickHandler={handleClick} name="=" className="operation" />
        </div>

      </div>
    </>
  );
};

Buttonpanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default Buttonpanel;
