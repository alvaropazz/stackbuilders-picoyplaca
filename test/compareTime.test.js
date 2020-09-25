import compareTime from '../src/logic/compareTime';

test('Should return true if argument is within the ranges of "pico y placa"', () => {
  expect(compareTime('07:00')).toBe(true);
  expect(compareTime('09:30')).toBe(true);
  expect(compareTime('16:00')).toBe(true);
  expect(compareTime('19:30')).toBe(true);
  expect(compareTime('06:59')).toBe(false);
  expect(compareTime('09:31')).toBe(false);
  expect(compareTime('15:59')).toBe(false);
  expect(compareTime('19:31')).toBe(false);
});
