import lastDigit from '../src/logic/lastDigit'

test('Should return the last digit of a string as an integer', () => {
  expect(lastDigit('PDA-5181')).toBe(1);
  expect(lastDigit('PCQ-2122')).toBe(2);
  expect(lastDigit('ABC-123')).toBe(3);
});
 