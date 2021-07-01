import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return <div>{result || '0'}</div>;
};

export default Display;

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };
