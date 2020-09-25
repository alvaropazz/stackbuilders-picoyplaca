import './styles.css';
import picoYPlaca from './logic/picoYPlaca';
import compareTime from './logic/compareTime';
import transformDate from './logic/transformDate';
import lastDigit from './logic/lastDigit';

const form = document.querySelector('.user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* Last Digit Info */
  const plateSelect = form.querySelector('input[id="plate-last-digit"]').value;
  /* Date Info */
  const dateSelect = form.querySelector('input[id="usage-date"]').value;
  /* Time Info */
  const timeSelect = form.querySelector('input[id="usage-time"]').value;
  /* Processing */
  const resultDisplay = document.querySelector('.result-text');
  if (picoYPlaca(lastDigit(plateSelect),
    transformDate(dateSelect),
    compareTime(timeSelect)) === true) {
    resultDisplay.innerHTML = 'NO PUEDE CIRCULAR';
  } else {
    resultDisplay.innerHTML = 'PUEDE CIRCULAR';
  }
  /* Reset */
  form.reset();
});
