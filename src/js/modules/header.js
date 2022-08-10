export default class Header {
  constructor() {
    this.header = null;
    this.goToUp = null;

    this.selector = {
      header: '.js-header-layout',
      goToUp: '.js-go-to-up'
    };

    this.state = {
      isHidden: 'is-hidden'
    };
  }

  init() {
    this.header = document.querySelector(this.selector.header);
    this.goToUp = document.querySelector(this.selector.goToUp);
    const shouldContinue = !!this.header && !!this.goToUp;

    if (!shouldContinue) return;

    this.addListeners();
  }

  addListeners() {
    document.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        this.header.classList.add(this.state.isHidden);
      } else {
        this.header.classList.remove(this.state.isHidden);
      }
    });

    this.goToUp.addEventListener('click', this.goToUpHandler);
  }

  goToUpHandler = () => {
    this.header.classList.remove(this.state.isHidden);}
}
