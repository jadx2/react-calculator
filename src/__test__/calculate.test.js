import Calculate from '../logic/calculate';

it('Returns an object', () => {
  expect(Calculate('1', '2', '+')).toBeInstanceOf(Object);
});

it('Returns all keys as null if button is AC', () => {
  const data = { total: '100', next: '200', operation: null };
  expect(Calculate(data, 'AC')).toStrictEqual({
    total: null,
    next: null,
    operation: null,
  });
});

describe('If button is an operator', () => {
  it('Should return empty if total is empty', () => {
    const data = { total: null, next: null, operation: null };
    expect(Calculate(data, '+')).toStrictEqual({});
  });
  it('Returns the sum if all values are present', () => {
    const data = { total: '1', next: '2', operation: '+' };
    expect(Calculate(data, '=')).toStrictEqual({
      total: '3',
      next: null,
      operation: '=',
    });
  });
  it('Returns the abstraction if all values are present', () => {
    const data = { total: '2', next: '1', operation: '-' };
    expect(Calculate(data, '=')).toStrictEqual({
      total: '1',
      next: null,
      operation: '=',
    });
  });
  it('Returns the multiplication if all values are present', () => {
    const data = { total: '2', next: '2', operation: 'x' };
    expect(Calculate(data, '=')).toStrictEqual({
      total: '4',
      next: null,
      operation: '=',
    });
  });
  it('Returns the division if all values are present', () => {
    const data = { total: '4', next: '2', operation: '÷' };
    expect(Calculate(data, '=')).toStrictEqual({
      total: '2',
      next: null,
      operation: '=',
    });
  });
});

describe('If button is floating point', () => {
  it('Returns total as 0. if total is null', () => {
    const data = { total: null, next: null, operation: null };
    expect(Calculate(data, '.')).toStrictEqual({
      total: '0.',
      next: null,
      operation: null,
    });
  });
  it('Returns total as total. if next is null and operation is =', () => {
    const data = { total: 1, next: null, operation: '=' };
    expect(Calculate(data, '.')).toStrictEqual({
      total: '1.',
      next: null,
      operation: null,
    });
  });
  it('Returns total as total. if operation is null and total does not include .', () => {
    const data = { total: '1', next: null, operation: null };
    expect(Calculate(data, '.')).toStrictEqual({
      total: '1.',
      next: null,
      operation: null,
    });
  });
  it('Returns next as next. if next does not include .', () => {
    const data = { total: '1', next: '1', operation: '+' };
    expect(Calculate(data, '.')).toStrictEqual({
      total: '1',
      next: '1.',
      operation: '+',
    });
  });
});

describe('If button is %', () => {
  it('Returns total/100 if total is present, operation is null', () => {
    const data = { total: '200', next: null, operation: null };
    expect(Calculate(data, '%')).toStrictEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });
  it('Returns total minus or plus the percentage of next if operation is + or -', () => {
    const data = { total: '200', next: '2', operation: '+' };
    expect(Calculate(data, '%')).toStrictEqual({
      total: '204',
      next: null,
      operation: null,
    });
  });
  it('Returns next as the percentage of total if operation is x or ÷', () => {
    const data = { total: '200', next: '10', operation: 'x' };
    expect(Calculate(data, '%')).toStrictEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });
});

describe('If button is a number', () => {
  it('Returns null if total is 0 and button is 0', () => {
    const data = { total: '0', next: null, operation: null };
    expect(Calculate(data, '0')).toStrictEqual({});
  });
  it('Returns the button if total is > 0', () => {
    const data = { total: '1', next: null, operation: null };
    expect(Calculate(data, '0')).toStrictEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });
  it('Returns button as if total and operation are present', () => {
    const data = { total: '1', next: null, operation: '+' };
    expect(Calculate(data, '1')).toStrictEqual({
      total: '1',
      next: '1',
      operation: '+',
    });
  });
  it('Returns next + button if next is  present', () => {
    const data = { total: '1', next: '1', operation: '+' };
    expect(Calculate(data, '1')).toStrictEqual({
      total: '1',
      next: '11',
      operation: '+',
    });
  });
});

describe('If button is +/-', () => {
  it('Returns nothing if total is null', () => {
    const data = { total: null, next: null, operation: null };
    expect(Calculate(data, '+/-')).toStrictEqual({});
  });
  it('It toggles positive or negative of total if next is null', () => {
    const data = { total: '1', next: null, operation: null };
    expect(Calculate(data, '+/-')).toStrictEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });
  it('It toggles positive or negative of next', () => {
    const data = { total: '1', next: '1', operation: '+' };
    expect(Calculate(data, '+/-')).toStrictEqual({
      total: '1',
      next: '-1',
      operation: '+',
    });
  });
});
