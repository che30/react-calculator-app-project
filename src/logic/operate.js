import Big from 'big.js';

const Operate = (numberOne, numberTwo, operator) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let result = {};
  let total = 0;

  switch (operator) {
    case '÷':
      total = bigNumberOne / bigNumberTwo;
      result = { total, next: total, operator };
      break;
    case '-':
      total = bigNumberOne - bigNumberTwo;
      result = { total, next: total, operator };
      break;
    case '+':
      total = bigNumberOne + bigNumberTwo;
      result = { total, next: total, operator };
      break;
    case 'X':
      total = bigNumberOne * bigNumberTwo;
      result = { total, next: total, operator };
      break;
    case '%':
      return { total: bigNumberOne, next: bigNumberTwo / 100, operator };
    default:
      result = { total: bigNumberOne, next: bigNumberTwo, operator };
  }
  return result;
};
export default Operate;
