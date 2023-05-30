const convertResponseToJSONString = (status, message, data) => {
  return JSON.stringify({ status, message, data });
};

const getImgURL = (path) => {
  return require(`../assets/images/${path}`);
};

const linkedTo = (path) => {
  return `/foods/:${path}`;
};

export { convertResponseToJSONString, getImgURL, linkedTo };
