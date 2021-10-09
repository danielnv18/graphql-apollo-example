export const getIdFromUrl = (url) => {
  const id = url
    .substring(0, url.length - 1)
    .split('/')
    .pop();
  return parseInt(id);
};
