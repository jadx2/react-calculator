import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator/Calculator';

describe('Renders the calculator page', () => {
  test('It has a title', () => {
    render(<Calculator />);
    expect(screen.getByText("Let's do some math!")).toBeInTheDocument();
  });
  test('has button AC in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });
  test('has button . in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('.')).toBeInTheDocument();
  });
  test('has button 1 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  test('has button 2 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
  test('has button 3 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  test('has button 4 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('4')).toBeInTheDocument();
  });
  test('has button 5 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  test('has button 6 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
  test('has button 7 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });
  test('has button 8 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('8')).toBeInTheDocument();
  });
  test('has button 9 in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('9')).toBeInTheDocument();
  });
  test('has button +/- in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('+/-')).toBeInTheDocument();
  });
  test('has button % in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('%')).toBeInTheDocument();
  });
  test('has button = in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  test('has button + in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });
  test('has button - in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('-')).toBeInTheDocument();
  });
  test('has button x in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('x')).toBeInTheDocument();
  });
  test('has button ÷ in the document', () => {
    render(<Calculator />);
    expect(screen.getByText('÷')).toBeInTheDocument();
  });
});

describe('It renders in the display the operations', () => {
  it('Renders in display 1 if button 1 is clicked', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'), { button: 0 });
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
  });
  it('Renders the result of a sum in the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('5'), { button: 0 });
    userEvent.click(screen.getByText('+'), { button: 0 });
    userEvent.click(screen.getByText('4'), { button: 0 });
    userEvent.click(screen.getByText('='), { button: 0 });
    expect(screen.getAllByText('9')[0]).toBeInTheDocument();
  });
  it('Renders the result of a rest in the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('5'), { button: 0 });
    userEvent.click(screen.getByText('-'), { button: 0 });
    userEvent.click(screen.getByText('4'), { button: 0 });
    userEvent.click(screen.getByText('='), { button: 0 });
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
  });
  it('Renders the result of a multiplication in the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('5'), { button: 0 });
    userEvent.click(screen.getByText('x'), { button: 0 });
    userEvent.click(screen.getByText('4'), { button: 0 });
    userEvent.click(screen.getByText('='), { button: 0 });
    expect(screen.getByText('20')).toBeInTheDocument();
  });
  it('Renders the result of a division in the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'), { button: 0 });
    userEvent.click(screen.getByText('0'), { button: 0 });
    userEvent.click(screen.getByText('0'), { button: 0 });
    userEvent.click(screen.getByText('÷'), { button: 0 });
    userEvent.click(screen.getByText('4'), { button: 0 });
    userEvent.click(screen.getByText('='), { button: 0 });
    expect(screen.getByText('25')).toBeInTheDocument();
  });
  it('Renders the result of a % in the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'), { button: 0 });
    userEvent.click(screen.getByText('0'), { button: 0 });
    userEvent.click(screen.getByText('0'), { button: 0 });
    userEvent.click(screen.getByText('x'), { button: 0 });
    userEvent.click(screen.getByText('2'), { button: 0 });
    userEvent.click(screen.getByText('0'), { button: 0 });
    userEvent.click(screen.getByText('%'), { button: 0 });
    expect(screen.getByText('20')).toBeInTheDocument();
  });
  it('Adds the floating point to number', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'), { button: 0 });
    userEvent.click(screen.getByText('.'), { button: 0 });
    expect(screen.getByText('1.')).toBeInTheDocument();
  });
  it('Changes from positive to negative', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'), { button: 0 });
    userEvent.click(screen.getByText('+/-'), { button: 0 });
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
  it('Changes from negative to positive', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('-'), { button: 0 });
    userEvent.click(screen.getByText('1'), { button: 0 });
    userEvent.click(screen.getByText('+/-'), { button: 0 });
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('Clears the display', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('2'), { button: 0 });
    userEvent.click(screen.getByText('AC'), { button: 0 });
    expect(screen.getAllByText('0')[0]).toBeInTheDocument();
  });
});
