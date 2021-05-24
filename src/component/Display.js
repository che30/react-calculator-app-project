import React from 'react';

const Display = (result) => {
  const {
    total, next, operation,
  } = result;
  let currentDisplay;
  if ((total && !operation && !next)) {
    currentDisplay = total;
  } else if (total && operation && !next) {
    currentDisplay = operation;
  } else if (total && operation) {
    currentDisplay = next;
  } else if (!operation && !next && !total) {
    currentDisplay = '0';
  }
  return (
    <div className="Display">
      {currentDisplay}
    </div>
  );
};
export default Display;
