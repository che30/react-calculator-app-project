import operate from './operate';

const Calculate = (inputdata, buttonName) => {
  let {
    total, next, operation,
  } = inputdata;
  switch (buttonName) {
    case '+/-':
      if (total && next) {
        next *= -1;
      } else if (total && !next) {
        total *= -1;
      }
      break;
    case '%':
      if (total && !next) {
        total /= 100;
        total.toString();
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '/':
    case '*':
    case '+':
    case '-':
      if (total || next) {
        operation = buttonName;
      }

      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === null) {
        if (total === null) {
          console.log('first appearance');
          total = buttonName;
        } else {
          console.log('second appearance');
          total += buttonName;
        }
      } else if (operation !== null) {
        if (next === null) {
          console.log('third appearance');
          next = buttonName;
        } else {
          console.log('fourth appearance');
          next += buttonName;
        }
      }
      break;
    case '.':
      if (operation !== null) {
        if (next === null) {
          next = `0${buttonName}`;
        } else if (!next.includes(buttonName)) {
          next += buttonName;
        }
      } else if (operation === null) {
        if (total === null) {
          total = `0${buttonName}`;
        } else if (!total.includes(buttonName)) {
          total += buttonName;
        }
      }
      break;
    default:
      if (next && total) {
        total = operate(total, next, operation);
        operation = null;
        next = null;
      }
  }
  const final = { total, next, operation };
  return final;
};
export default Calculate;
