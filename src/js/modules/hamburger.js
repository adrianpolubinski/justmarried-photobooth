export default class Hamburger {
  constructor() {
    this.header = null;
    this.hamburger = null;

    this.selector = {
      header: '.js-header',
      hamburger: '.js-hamburger'
    };

    this.state = {
      isOpen: 'is-open'
    };
  }

  init() {
    this.header = document.querySelector(this.selector.header);
    this.hamburger = document.querySelector(this.selector.hamburger);

    const shouldContinue =  !!this.header && !!this.hamburger;

    if (!shouldContinue) return;

    this.addListeners();
  }

  addListeners() {
    this.hamburger.addEventListener('click', this.openMenuHandler);
  }

  openMenuHandler = () => {
    this.header.classList.toggle(this.state.isOpen);
  };
}
