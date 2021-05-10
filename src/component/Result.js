/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      {' '}
      {props.result}
    </div>
  );
}
Result.defaultProps = {
  result: 0,
};
Result.propTypes = {
  result: PropTypes.number,
};

export default Result;
