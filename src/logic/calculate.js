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
      if (!total) {
        return {};
      }
      if (total && (!operation || operation === '=') && !next) {
        total = (total * -1).toString();
      } else if (next) {
        next = (next * -1).toString();
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
      if (!operation) {
        if (!total) {
          total = buttonName;
        } else {
          total += buttonName;
        }
      } else if (total && operation && !next) {
        if (operation === '=') {
          total = buttonName;
          next = null;
          operation = null;
        } else {
          next = buttonName;
        }
      } else if (next) {
        next += buttonName;
      }
      break;

    case '%':
      if (total && !operation && !next) {
        total = (total / 100).toString();
      }
      if (total && operation && next) {
        if (operation === '+' || operation === '-') {
          next = operate(total, next, 'x') / 100;
          total = operate(total, next, operation);
          next = null;
          operation = null;
        } else {
          total = operate(total, next / 100, operation);
          next = null;
          operation = null;
        }
      }
      break;

    case '.':
      if (!total) {
        total = '0.';
      } else if (total && operation && !next) {
        if (operation === '=') {
          total += '.';
          operation = null;
        } else {
          next = '0.';
        }
      } else if (!operation && !total.includes('.')) {
        total += '.';
      } else if (operation && !next.includes('.')) {
        next += '.';
      }
      break;

    case '+':
    case '-':
    case 'x':
    case '÷':
    case '=':
      if (!total) {
        return {};
      }
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }

      operation = buttonName;
      break;

    default:
      total = 'Error';
      next = null;
      operation = null;
  }

  return { total, next, operation };
};

export default calculate;
