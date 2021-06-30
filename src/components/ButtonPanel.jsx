import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const buttonsGroup = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'x'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', ',', '.', '='],
  };

  const handleClick = (button) => {
    const { handleClick } = props;
    handleClick(button);
  };

  const renderButtons = (buttons) => buttons.map((button) => (
    <Button
      key={button}
      buttonName={button}
      onClick={(item) => handleClick(item)}
    />
  ));

  const {
    group1, group2, group3, group4, group5,
  } = buttonsGroup;

  return (
    <>
      <div>{renderButtons(group1)}</div>
      <div>{renderButtons(group2)}</div>
      <div>{renderButtons(group3)}</div>
      <div>{renderButtons(group4)}</div>
      <div>{renderButtons(group5)}</div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
