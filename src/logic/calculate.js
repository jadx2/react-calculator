import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }
      break;
    case '%':
      if (total && !next && !operation) {
        total /= 100;
      } else if (total && next && operation) {
        if (operation === '+' || operation === '-') {
          const tempNext = (total * next) / 100;
          total = operate(Number(total), tempNext, operation).toString();
          next = null;
          operation = null;
        } else {
          total = (total * next) / 100;
          next = null;
          operation = null;
        }
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
      if (!total && !operation) {
        total = buttonName;
      } else if (total && !operation) {
        total += buttonName;
      } else if (total && operation && !next) {
        next = buttonName;
      } else {
        next += buttonName;
      }

      break;

    case '.':
      if (!total) {
        total = '0.';
      } else if (!operation && !total.includes('.')) {
        total += '.';
      } else if (operation && !next) {
        next = '0.';
      } else if (operation && !next.includes('.')) {
        next += '.';
      }
      break;

    case '+':
    case '-':
    case 'x':
    case '÷':
      if (!total) {
        total = '0';
      } else if (total && next && operation) {
        total = operate(total, next, operation).toString();
        next = null;
        operation = null;
      }

      operation = buttonName;
      break;

    case '=':
      if (!total && !next) {
        return '0';
      }
      if (total && !next) {
        return total;
      }
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    default:
      total = 'Error';
      next = null;
      operation = null;
  }

  return { total, next, operation };
};

export default calculate;
