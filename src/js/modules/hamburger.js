export default class Hamburger {
  constructor() {
    this.hamburger = null;

    this.selector = {
      hamburger: '.js-hamburger'
    };

    this.state = {
      isOpen: 'is-open'
    };
  }

  init() {
    this.hamburger = document.querySelector(this.selector.hamburger);

    const shouldContinue = !!this.hamburger;

    if (!shouldContinue) return;
  }
}
