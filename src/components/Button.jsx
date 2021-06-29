import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;
  return <button type="button">{buttonName}</button>;
};

export default Button;

Button.propTypes = { buttonName: PropTypes.string.isRequired };
