import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  switch (operation) {
    case '+':
      return num1.plus(num2).toString();
    case '-':
      return num1.minus(num2).toString();
    case 'x':
      return num1.times(num2).toString();
    case '÷':
      return num2 === '0' ? 'Error' : num1.div(num2).toString();

    default:
      return {};
  }
};

export default operate;
