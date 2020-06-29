import { add, total } from './App';

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
  expect(add(2, 3)).toBe(5);
});
//  it and test do the same
it('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
  expect(add(2, 3)).toBe(5);
});

it('total', () => {
  expect(total(5, 20)).toBe('$25');
});
