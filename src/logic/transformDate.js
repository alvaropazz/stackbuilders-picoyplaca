const transformDate = (date) => {
  const split = date.split('/');
  const dateObj = new Date(+split[2], split[1] - 1, +split[0]);
  return dateObj.getDay();
};

export default transformDate;