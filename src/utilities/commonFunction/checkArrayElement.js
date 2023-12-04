export function checkArray(array, value) {
  return array.includes(value);
}

export function removeArray(array, value) {
  return array.filter((ele) => {
    return ele !== value;
  });
}

export function addArray(array, value) {
  return array.concat(value);
}
