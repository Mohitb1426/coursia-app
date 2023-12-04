const urls = [];
let remainingContent = '';
export const getImgTag = (htmlString) => {
  urls.splice(0, urls.length);
  remainingContent = htmlString;
  filterImgTags(htmlString);
  return { urls, remainingContent };
};

const filterImgTags = (str) => {
  if (str != null) {
    const p = str.match(/<img([\w\W]+?)>/g);
    if (p) {
      const a = p[0];
      if (a) {
        urls.push(a);
        remainingContent = remainingContent.replace(a, '');
        remainingContent = remainingContent.replace('<div><br></div>', '');
        filterImgTags(remainingContent);
      }
    }
  }
};
