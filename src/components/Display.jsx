import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return <h1>{result || '0'}</h1>;
};

export default Display;

Display.propTypes = { result: PropTypes.string.isRequired };
