import { lettersDownAnimation, lettersUpAnimation, lettersShowAnimation } from './config';
export default class Brand {
  constructor() {
    this.link = null;
    this.letters = null;

    this.selector = {
      link: '.c-header__link',
      letters: '#svgGroup > path'
    };
  }

  init() {
    this.link = document.querySelector(this.selector.link);
    this.letters = document.querySelectorAll(this.selector.letters);

    const shouldContinue = !!this.link && !!this.letters.length;

    if (!shouldContinue) return;

    this.writeBrandHandler();
    this.addListeners();
  }

  addListeners() {
    this.link.addEventListener('mouseenter', () => {
      this.makeWaveHandler('start', 0);
    });
  }

  writeBrandHandler() {
    this.makeWaveHandler('start', 0.1);
    gsap.from(this.selector.letters, lettersShowAnimation());
    this.makeWaveHandler('end', 2);
  }

  makeWaveHandler(from, delay) {
    gsap.to(this.selector.letters, lettersDownAnimation(from, delay));
    gsap.to(this.selector.letters, lettersUpAnimation(from, delay));
  }
}
