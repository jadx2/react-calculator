import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

jest.mock('../components/quotes/Quotes.jsx');

describe('Link buttons render the components', () => {
  test('Click home button renders home component', () => {
    render(<App />, { wrapper: MemoryRouter });
    userEvent.click(screen.getByText('Home'), { button: 0 });
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
  test('Click calculator button renders calculator component', () => {
    render(<App />, { wrapper: MemoryRouter });
    userEvent.click(screen.getByText('Calculator'), { button: 0 });
    expect(screen.getByText("Let's do some math!")).toBeInTheDocument();
  });
  test('Click quotes button renders quotes component', () => {
    render(<App />, { wrapper: MemoryRouter });
    userEvent.click(screen.getByText('Quotes'), { button: 0 });
    expect(screen.getByText('This is the quotes page!')).toBeInTheDocument();
  });
});
