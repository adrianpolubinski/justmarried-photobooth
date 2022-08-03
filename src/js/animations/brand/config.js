const lettersDownAnimation = (from, delay) => {
  return {
    delay: delay,
    duration: 0.3,
    y: 3,
    stagger: {
      from: from,
      each: 0.1
    },
    ease: Power0.easeNone
  };
};

const lettersUpAnimation = (from, delay) => {
  return {
    delay: delay + 0.3,
    duration: 0.3,
    y: 0,
    stagger: {
      from: from,
      each: 0.1
    },
    ease: Power0.easeNone
  };
};

const lettersShowAnimation = () => {
  return {
    duration: 0.3,
    scale: 0.5,
    opacity: 0,
    stagger: 0.1,
    ease: 'linear'
  };
};

export { lettersUpAnimation, lettersDownAnimation, lettersShowAnimation };
