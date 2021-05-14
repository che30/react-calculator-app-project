import Big from 'big.js';

const Operate = (numberOne, numberTwo, operator) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let total = 0;

  switch (operator) {
    case '÷':
      total = bigNumberOne.div(bigNumberTwo);
      break;
    case '-':
      total = bigNumberOne.minus(bigNumberTwo);
      break;
    case '+':
      total = bigNumberOne.plus(bigNumberTwo);
      break;
    case '*':
      total = bigNumberOne.times(bigNumberTwo);
      break;
    case '/':
      total = bigNumberTwo === 0 ? 'Undefined' : bigNumberOne.div(bigNumberTwo);
      break;
    case '%':
      total = bigNumberOne.mod(bigNumberTwo);
      break;
    default:
      throw Error('Unknown operation!');
  }
  const result = total.toString();
  return result;
};
export default Operate;
