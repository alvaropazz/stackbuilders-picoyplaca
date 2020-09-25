const hoyNoCircula = (plate, date) => {
  if (date === 0 && (plate === 1 || plate === 2)) {
    return true;
  } if (date === 1 && (plate === 3 || plate === 4)) {
    return true;
  } if (date === 2 && (plate === 5 || plate === 6)) {
    return true;
  } if (date === 3 && (plate === 7 || plate === 8)) {
    return true;
  } if (date === 4 && (plate === 9 || plate === 0)) {
    return true;
  }
  return false;
};

export default hoyNoCircula;