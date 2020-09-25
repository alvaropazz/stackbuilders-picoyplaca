const picoYPlaca = (plate, date, time) => {
  if (date === 1 && (plate === 1 || plate === 2) && time) {
    return true;
  } if (date === 2 && (plate === 3 || plate === 4) && time) {
    return true;
  } if (date === 3 && (plate === 5 || plate === 6) && time) {
    return true;
  } if (date === 4 && (plate === 7 || plate === 8) && time) {
    return true;
  } if (date === 5 && (plate === 9 || plate === 0) && time) {
    return true;
  }
  return false;
};

export default picoYPlaca;