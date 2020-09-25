const compareTime = (time) => {
  const split = time.split(':');
  const totalSeconds = parseInt(split[0] * 3600 + split[1] * 60, 10);
  /* These are the (old) pico y placa time ranges in seconds */
  const timeRanges = {
    morningLowerLimit: 25200,
    morningUpperLimit: 34200,
    afternoonLowerLimit: 57600,
    afternoonUpperLimit: 70200,
  };
  if ((totalSeconds >= timeRanges.morningLowerLimit
    && totalSeconds <= timeRanges.morningUpperLimit)
    || (totalSeconds >= timeRanges.afternoonLowerLimit
    && totalSeconds <= timeRanges.afternoonUpperLimit)) {
    return true;
  }
  return false;
};

export default compareTime;