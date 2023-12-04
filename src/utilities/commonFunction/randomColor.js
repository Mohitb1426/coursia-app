/* eslint-disable no-plusplus */
export const getRandomHexColor = (size) => {
  const hex = '123456789ABCDE';
  let output = '';
  for (let i = 0; i < size; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return `#${output}`;
};

export const topperColorCodes = (rank) => {
  switch (rank) {
    case 1:
      return {
        backgroundColor: '#FBAF1D',
        borderColor: '#FDC822',
      };
    case 2:
      return {
        backgroundColor: '#FBB733',
        borderColor: '#F9CB73',
      };
    case 3:
      return {
        backgroundColor: '#F9C45D',
        borderColor: '#FABD48',
      };
    case 4:
      return {
        backgroundColor: '#F8D188',
        borderColor: '#F9CB73',
      };
    case 5:
      return {
        backgroundColor: '#F6E7CA',
        borderColor: '#F7D99F',
      };
    case 6:
      return {
        backgroundColor: '#F6E7CA',
        borderColor: '#F7D99F',
      };
    default:
      return {
        backgroundColor: '#F6E7CA',
        borderColor: '#F7D99F',
      };
  }
};
