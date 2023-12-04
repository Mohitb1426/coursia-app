export const indexToAlpha = (num) => {
  // ASCII value of first character
  const A = 'a'.charCodeAt(0);
  const numberToCharacter = (number) => {
    return String.fromCharCode(A + number);
  };
  return numberToCharacter(num);
};
