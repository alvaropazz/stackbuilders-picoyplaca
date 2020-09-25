const lastDigit = (plate) => {
  const plateLength = plate.length;
  const plateLast = plate.charAt(plateLength - 1);
  return parseInt(plateLast, 10);
};

export default lastDigit;