export default class Calendar {
  constructor() {
    this.date = null;

    this.actualDay = null;
    this.actualMonth = null;
    this.actualYear = null;

    this.months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ];

    this.buttonPrev = null;
    this.buttonNext = null;
    this.daysContainer = null;
    this.selectedMonth = null;

    this.selector = {
      buttonPrev: ".js-button-prev",
      buttonNext: ".js-button-next",
      dayList: ".js-day-list",
      selectedMonth: ".js-selected-month",
    };
  }
  init() {
    this.buttonPrev = document.querySelector(this.selector.buttonPrev);
    this.buttonNext = document.querySelector(this.selector.buttonNext);
    this.dayList = document.querySelector(this.selector.dayList);
    this.selectedMonth = document.querySelector(this.selector.selectedMonth);

    const shouldContinue =
      !!this.buttonPrev &&
      !!this.buttonNext &&
      !!this.dayList &&
      !!this.selectedMonth;

    if (!shouldContinue) return;

    this.date = new Date();
    this.actualDay = this.date.getDate();
    this.actualMonth = this.date.getMonth();
    this.actualYear = this.date.getFullYear();

    this.generateCalendarHandler();
    this.addListeners();
  }
  addListeners() {
    this.buttonPrev.addEventListener("click", this.prevMonthChangeHandler);
    this.buttonNext.addEventListener("click", this.nextMonthChangeHandler);
  }

  generateCalendarHandler() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();

    const monthText = this.months[month];
    this.selectedMonth.textContent = monthText + " " + year;

    const weekDayEn = new Date(year, month, 1).getDay();
    const weekDayPl = weekDayEn - 1 === -1 ? 6 : weekDayEn - 1;

    let days = "";
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = weekDayPl; i > 0; i--) {
      days += `<li class="c-day-list__item"><p class="c-day-list__day c-day-list__day--previous-month">${
        prevMonthLastDay - i + 1
      }</p></li>`;
    }

    const currentMonthLastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= currentMonthLastDay; i++) {
      if (
        i === this.actualDay &&
        this.actualMonth === month &&
        this.actualYear == year
      ) {
        days += `<li class="c-day-list__item ">
        <p class="c-day-list__day c-day-list__day--current-day">${i}</p></li>`;
      } else {
        days += `<li class="c-day-list__item"> <p class="c-day-list__day">${i}</p></li>`;
      }
    }

    const nextMonthDaysCount = 42 - weekDayPl - currentMonthLastDay;
    for (let i = 1; i <= nextMonthDaysCount; i++) {
      days += `<li class="c-day-list__item"><p class="c-day-list__day c-day-list__day--next-month">${i}</p></li>`;
    }

    this.dayList.innerHTML = days;
  }

  prevMonthChangeHandler=()=>{
    if (
        this.date.getMonth() > this.actualMonth ||
        this.date.getFullYear() > this.actualYear
      ) {
        this.date.setMonth(this.date.getMonth() - 1);
        this.generateCalendar();
      }
  }

  nextMonthChangeHandler=()=>{
    this.date.setMonth(this.date.getMonth() + 1);
    this.generateCalendar();
  }
}
