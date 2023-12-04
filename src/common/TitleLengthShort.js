export const titleLengthShort = (title) => {
  if (title.length >= 25) {
    // eslint-disable-next-line no-param-reassign
    title = title.slice(0, 25);
    return `${title}...`;
  }
  return title;
};
