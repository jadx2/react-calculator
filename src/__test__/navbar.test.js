import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

describe('It renders the navbar', () => {
  test('It has a title', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  });
  test('It has link button to home', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  test('It has link button to calculator', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });
  test('It has link button to quotes', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Quotes')).toBeInTheDocument();
  });
});
