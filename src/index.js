import './styles.css';
import hoyNoCircula from './logic/hoyNoCircula';

const form = document.querySelector('.user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const plateSelect = form.querySelector('select[id="plate-last-digit"]').value;
  const plateDigit = parseInt(plateSelect, 10);
  const dateSelect = form.querySelector('input[id="usage-date"]').value;
  const dayOfWeek = new Date(dateSelect).getDay();
  hoyNoCircula(plateDigit, dayOfWeek);
});
