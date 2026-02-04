const saveToLocalStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
const getFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  if (data) {
    return data[key];
  } else {
    return null;
  }
};

export { saveToLocalStorage, getFromLocalStorage };
