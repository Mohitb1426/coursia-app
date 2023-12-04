export const splitName = (data) => {
  const name = data?.name;
  const split = [name.substring(0, name.indexOf(' ')), name.substring(name.indexOf(' ') + 1)];
  const newData = {
    firstName: split[0],
    lastName: split[1],
    ...data,
  };
  return newData;
};
