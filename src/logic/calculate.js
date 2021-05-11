import operate from './operate';

const Calculate = ({ total, next, operator }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      return { total: total * -1, next: next * -1, operator };
    case '%':
      return operate(total, next, buttonName);
    case 'AC':
      return { total: 0, next: 0, operator };
    case '=' :
    return {total: 0,next: 0,operator}
    default:
      return operate(total, next, buttonName);
  }
};
export default Calculate;
