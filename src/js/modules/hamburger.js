export default class Hamburger {
  constructor() {
    this.hamburger = null;
    this.header = null;

    this.selector = {
      hamburger: '.js-hamburger',
      header: '.js-header'
    };

    this.state = {
      isOpen: 'is-open'
    };
  }

  init() {
    this.hamburger = document.querySelector(this.selector.hamburger);
    this.header = document.querySelector(this.selector.header);

    const shouldContinue = !!this.hamburger && !!this.header;

    if (!shouldContinue) return;

    this.addListeners();
  }

  addListeners() {
    this.hamburger.addEventListener('click', this.openMenuHandler);
  }

  openMenuHandler = () => {
    this.header.classList.toggle(this.state.isOpen);
  }
}
