export default class Calendar {
  constructor() {
    this.date = null;

    this.actualDay = null;
    this.actualMonth = null;
    this.actualYear = null;

    this.months = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień'
    ];

    this.buttonPrev = null;
    this.buttonNext = null;
    this.daysContainer = null;
    this.selectedMonth = null;
    this.reservationDate = null;
    this.reservationPopup = null;
    this.actualMonthDayArray = null;
    this.DateHidden = null;
    this.jsResetBtn = null;

    this.selector = {
      buttonPrev: '.js-button-prev',
      buttonNext: '.js-button-next',
      dayList: '.js-day-list',
      selectedMonth: '.js-selected-month',
      reservationDate: '.js-reservation-date',
      reservationPopup: '.js-reservation-popup',
      actualMonthDay: '.js-actual-month-day',
      dateHidden: '.js-date-hidden',
      ResetBtn: '.js-reset-btn'
    };
  }
  init() {
    this.buttonPrev = document.querySelector(this.selector.buttonPrev);
    this.buttonNext = document.querySelector(this.selector.buttonNext);
    this.dayList = document.querySelector(this.selector.dayList);
    this.selectedMonth = document.querySelector(this.selector.selectedMonth);
    this.reservationDate = document.querySelector(this.selector.reservationDate);
    this.reservationPopup = document.querySelector(this.selector.reservationPopup);
    this.dateHidden = document.querySelector(this.selector.dateHidden);
    this.ResetBtn = document.querySelector(this.selector.ResetBtn);

    const shouldContinue =
      !!this.buttonPrev &&
      !!this.buttonNext &&
      !!this.dayList &&
      !!this.selectedMonth &&
      !!this.reservationDate &&
      !!this.reservationPopup &&
      !!this.dateHidden &&
      !!this.ResetBtn;

    if (!shouldContinue) return;

    this.date = new Date();
    this.actualDay = this.date.getDate();
    this.actualMonth = this.date.getMonth();
    this.actualYear = this.date.getFullYear();

    this.generateCalendarHandler();
    this.addListeners();
  }
  addListeners() {
    this.buttonPrev.addEventListener('click', this.prevMonthChangeHandler);
    this.buttonNext.addEventListener('click', this.nextMonthChangeHandler);
    this.ResetBtn.addEventListener('click', this.closeReservationPopupHandler);
  }

  generateCalendarHandler = () => {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();

    const monthText = this.months[month];
    this.selectedMonth.textContent = monthText + ' ' + year;

    const weekDayEn = new Date(year, month, 1).getDay();
    const weekDayPl = weekDayEn - 1 === -1 ? 6 : weekDayEn - 1;

    let templateStringDays = '';
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = weekDayPl; i > 0; i--) {
      templateStringDays += `<li class="c-day-list__item"><p class="c-day-list__day c-day-list__day--previous-month">${
        prevMonthLastDay - i + 1
      }</p></li>`;
    }

    const currentMonthLastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= currentMonthLastDay; i++) {
      if (i === this.actualDay && this.actualMonth === month && this.actualYear == year) {
        templateStringDays += `<li class="c-day-list__item">
        <p class="c-day-list__day c-day-list__day--current-day js-actual-month-day">${i}</p></li>`;
      } else {
        templateStringDays += `<li class="c-day-list__item"> <p class="c-day-list__day js-actual-month-day">${i}</p></li>`;
      }
    }

    const nextMonthDaysCount = 42 - weekDayPl - currentMonthLastDay;
    for (let i = 1; i <= nextMonthDaysCount; i++) {
      templateStringDays += `<li class="c-day-list__item"><p class="c-day-list__day c-day-list__day--next-month">${i}</p></li>`;
    }

    this.dayList.innerHTML = templateStringDays;

    this.actualMonthDayArray = document.querySelectorAll(this.selector.actualMonthDay);
    this.setReservationsHandler();
    this.actualMonthDayArray.forEach((day) => {
      day.addEventListener('click', () => {
        this.showPopupHander(day);
      });
    });
    this.setReservationsHandler();
  };

  prevMonthChangeHandler = () => {
    if (this.date.getMonth() > this.actualMonth || this.date.getFullYear() > this.actualYear) {
      this.date.setMonth(this.date.getMonth() - 1);
      this.generateCalendarHandler();
    }
  };

  nextMonthChangeHandler = () => {
    this.date.setMonth(this.date.getMonth() + 1);
    this.generateCalendarHandler();
  };

  showPopupHander = (day) => {
    if (!this.reservationPopup.classList.contains('is-visible')) {
      const reservationDate =
        day.textContent + '-' + (this.months[this.date.getMonth()]) + '-' + this.date.getFullYear();
      this.reservationDate.textContent = reservationDate;
      this.dateHidden.value = reservationDate;
      this.reservationPopup.classList.toggle('is-visible');
    }
  };

  setReservationsHandler = () => {
    const days = [];
    fetch(
      `http://localhost:3000/api/reservations/${this.date.getFullYear()}/${
        this.months[this.date.getMonth()]
      }`
    )
      .then((res) => res.json())
      .then((docs) => {
        for (let doc of docs) {
          const date = doc.date;
          days.push(date.split('-')[0]);
        }

        this.actualMonthDayArray.forEach((e) => {
          const counter = days.filter((x) => e.textContent == x).length;
          if (counter == 1) {
            e.classList.add('c-day-list__day--reserved-once');
          } else if (counter >= 2) {
            e.classList.add('c-day-list__day--reserved-twice');
          }
        });
      });
  };

  closeReservationPopupHandler = () => {
    this.reservationPopup.classList.toggle('is-visible');
  };
}
