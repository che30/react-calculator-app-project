/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className="square" type="button">
      {props.value}
    </button>
  );
}

Button.propType = {
  value: PropTypes.string.isRequired,
};

export default Button;
