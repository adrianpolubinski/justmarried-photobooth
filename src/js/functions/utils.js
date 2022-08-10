const debounceEvent = (callback, wait = 250) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), wait);
  };
};

export { debounceEvent };
