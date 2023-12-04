export function convertDateToUTC() {
  const newDate = new Date();
  return newDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
