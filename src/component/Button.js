/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler,
}) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return <button type="button" onClick={(event) => handleClick(event.target.name)} name={name}>{name}</button>;
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,

};

export default Button;
