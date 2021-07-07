import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/home/Home';

describe('Render home', () => {
  test('It has a title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  test('It has a description', () => {
    render(<Home />);
    expect(
      screen.getAllByText('Lorem ipsum', { exact: false })[0],
    ).toBeInTheDocument();
  });
});
