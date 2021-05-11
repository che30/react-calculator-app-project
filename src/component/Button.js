/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => (
  <button className={props.name} type="button">
    {props.name}
  </button>
);

Button.propType = {
  name: PropTypes.string.isRequired,
};

export default Button;
