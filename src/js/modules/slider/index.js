import { slidesArray } from './config';
export default class Slider {
  constructor() {
    this.currentSlide = 0;
    this.slidesArray = [];
    this.paginationItemsArray = [];
    this.sliderTimeout = null;

    this.slidesList = null;
    this.paginationList = null;
    this.sliderNavigationButtonLeft = null;
    this.sliderNavigationButtonRight = null;

    this.selector = {
      slidesList: '.js-slides-list',
      paginationList: '.js-pagination-list',
      sliderNavigationButtonLeft: '.js-slider-navigation-button-left',
      sliderNavigationButtonRight: '.js-slider-navigation-button-right'
    };

    this.state = {
      isActive: 'is-active'
    };
  }

  init() {
    this.slidesList = document.querySelector(this.selector.slidesList);
    this.paginationList = document.querySelector(this.selector.paginationList);
    this.sliderNavigationButtonLeft = document.querySelector(
      this.selector.sliderNavigationButtonLeft
    );
    this.sliderNavigationButtonRight = document.querySelector(
      this.selector.sliderNavigationButtonRight
    );

    const shouldContinue =
      !!this.slidesList &&
      !!this.paginationList &&
      !!this.sliderNavigationButtonLeft &&
      !!this.sliderNavigationButtonRight;

    if (!shouldContinue) return;

    this.generateSliderHandler();
    this.addListeners();
    this.startAutoPlayHandler();
  }
  addListeners() {
    this.sliderNavigationButtonLeft.addEventListener('click', this.prevSlideChangeHandler);
    this.sliderNavigationButtonRight.addEventListener('click', this.nextSlideChangeHandler);
    this.sliderNavigationButtonLeft.addEventListener('mouseleave', this.startAutoPlayHandler);
    this.sliderNavigationButtonLeft.addEventListener('mouseenter', this.stopAutoPlayHandler);
    this.sliderNavigationButtonRight.addEventListener('mouseleave', this.startAutoPlayHandler);
    this.sliderNavigationButtonRight.addEventListener('mouseenter', this.stopAutoPlayHandler);
  }

  generateSliderHandler = () => {
    let templateStringSlider = '';
    let templateStringPagination = '';
    for (let i = 0; i < slidesArray.length; i++) {
      templateStringSlider += `
        <li class="c-slides-list__item js-slide" style="background-image: url(${slidesArray[i].path})">
            <div class="c-slide-box">
                <p class="c-slide-box__text">${slidesArray[i].description}</p>
            </div>
        </li>`;
      templateStringPagination += `<li class="c-pagination-list__item js-pagination"></li>`;
    }
    this.slidesList.innerHTML = templateStringSlider;
    this.paginationList.innerHTML = templateStringPagination;

    this.slidesArray = document.querySelectorAll('.js-slide');
    this.paginationItemsArray = document.querySelectorAll('.js-pagination');

    this.slidesArray[0].classList.toggle(this.state.isActive);
    this.paginationItemsArray[0].classList.toggle(this.state.isActive);
  };

  stopAutoPlayHandler = () => {
    clearInterval(this.sliderTimeout);
  };

  startAutoPlayHandler = () => {
    this.sliderTimeout = setInterval(this.nextSlideChangeHandler, 5000);
  };

  changeStateHandler = (currentSlide) => {
    this.slidesArray[currentSlide].classList.toggle(this.state.isActive);
    this.paginationItemsArray[currentSlide].classList.toggle(this.state.isActive);
  };
  prevSlideChangeHandler = () => {
    this.changeStateHandler(this.currentSlide);
    if (this.currentSlide === 0) {
      this.currentSlide = this.slidesArray.length - 1;
      this.changeStateHandler(this.currentSlide);
    } else {
      this.currentSlide--;
      this.changeStateHandler(this.currentSlide);
    }
  };
  nextSlideChangeHandler = () => {
    this.changeStateHandler(this.currentSlide);
    if (this.currentSlide < this.slidesArray.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.changeStateHandler(this.currentSlide);
  };
}
