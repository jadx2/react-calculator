import PropTypes from 'prop-types';
import '../styles/calculator/Display.css';

const Display = (props) => {
  const { result } = props;
  return <div className="display">{result || '0'}</div>;
};

export default Display;

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };
