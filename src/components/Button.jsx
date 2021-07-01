import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, onClick } = props;

  const handleClick = () => onClick(buttonName);

  return (
    <button type="button" onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
