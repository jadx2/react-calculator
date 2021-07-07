import TestRenderer from 'react-test-renderer';
import Quotes from '../components/quotes/Quotes';

jest.mock('../quotesData/quotes');
it('renders Quotes', () => {
  const tree = TestRenderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
