import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/calculator/ButtonPanel.css';

const ButtonPanel = (props) => {
  const { onClick } = props;
  const buttonsGroup = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'x'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  const renderButtons = (buttons) => buttons.map((button) => (
    <Button key={button} buttonName={button} onClick={handleClick} />
  ));

  const {
    group1, group2, group3, group4, group5,
  } = buttonsGroup;

  return (
    <>
      <div className="button-group">{renderButtons(group1)}</div>
      <div className="button-group">{renderButtons(group2)}</div>
      <div className="button-group">{renderButtons(group3)}</div>
      <div className="button-group">{renderButtons(group4)}</div>
      <div className="button-group">{renderButtons(group5)}</div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
