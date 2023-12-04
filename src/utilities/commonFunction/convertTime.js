function convertTime(secs) {
  const hours = Math.floor(secs / (60 * 60));
  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);
  const divisor_for_seconds = divisor_for_minutes % 60;
  const seconds = Math.ceil(divisor_for_seconds);
  const obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return `${String(obj.h)?.padStart(
    2,
    '0',
  )}:${String(obj.m)?.padStart(2, '0')}:${String(obj.s)?.padStart(
    2,
    '0',
  )}`;
}

export default convertTime;
