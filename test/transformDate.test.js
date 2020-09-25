import transformDate from '../src/logic/transformDate'

test('Should transform a string into a date object and then return the day as an integer', () => {
  expect(transformDate('10/12/2020')).toBe(4);
  expect(transformDate('11/12/2020')).toBe(5);
  expect(transformDate('12/12/2020')).toBe(6);
});
 