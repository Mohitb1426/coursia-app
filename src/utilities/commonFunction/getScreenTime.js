export function getScreenTime() {
  const date = new Date().getTime();
  return Number((date / 1000).toFixed(0)) - 1;
}
