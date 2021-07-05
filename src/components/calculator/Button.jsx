import PropTypes from 'prop-types';
import '../styles/calculator/Button.css';

const Button = (props) => {
  const { buttonName, onClick } = props;

  const handleClick = () => onClick(buttonName);

  const classStyle = (buttonName) => {
    switch (buttonName) {
      case '+':
      case '-':
      case 'x':
      case '÷':
      case '=':
        return 'btn btn-orange';
      case '0':
        return 'btn bg-btn';
      default:
        return 'btn';
    }
  };

  return (
    <button
      className={classStyle(buttonName)}
      type="button"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
