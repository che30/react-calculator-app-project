import Big from 'big.js';

const Operate = (numberOne, numberTwo, operator) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let result = {};
  let total = 0;

  switch (operator) {
    case '÷':
      total = bigNumberOne.div(bigNumberTwo);
      result = { total, next: total, operator };
      break;
    case '-':
      total = bigNumberOne.minus(bigNumberTwo);
      result = { total, next: total, operator };
      break;
    case '+':
      total = bigNumberOne.plus(bigNumberTwo);
      result = { total, next: total, operator };
      break;
    case '*':
      total = bigNumberOne.times(bigNumberTwo);
      result = { total, next: total, operator };
      break;
    case '%':
      return { total: bigNumberOne, next: bigNumberTwo.mod(100), operator };
    default:
      result = { total: bigNumberOne, next: bigNumberTwo, operator };
  }
  return result;
};
export default Operate;
