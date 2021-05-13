import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, next, operation }) => (
  <>
    <div className="Display">{ next || operation || result || '0' }</div>
  </>
);

Display.defaultProps = {
  result: '0',
  next: null,
  operation: null,

};
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
