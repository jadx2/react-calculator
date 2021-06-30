import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return <h1>{result || '0'}</h1>;
};

export default Display;

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };
