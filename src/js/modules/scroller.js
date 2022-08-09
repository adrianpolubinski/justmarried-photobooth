export default class Scroller {
    constructor(){
        this.currentSectionIndex = 0;

        this.headerLink = null;
        this.hreaderId = null;
        this.pricesLink = null;
        this.pricesId = null;
        this.calendarLink = null;
        this.calendarId = null;
        this.contactLink = null;
        this.conactId = null;

        this.selector = {
            headerLink: '.js-header-link',
            headerId: '#js-header-id',
            packagesLink:'.js-packages-link',
            packagesId:'#js-packages-id',
            calendarLink: '.js-calendar-link',
            calendarId: '#js-calendar-id',
            contactLink: '.js-contact-link',
            contactId: '#js-contact-id',
        }

        this.state = {
            isActive: 'is-active',
        }
    }

    init() {
        this.headerLink = document.querySelector(this.selector.headerLink);
        this.headerId = document.querySelector(this.selector.headerId);
        this.packagesLink = document.querySelector(this.selector.packagesLink);
        this.packagesId = document.querySelector(this.selector.packagesId);
        this.calendarLink = document.querySelector(this.selector.calendarLink);
        this.calendarId = document.querySelector(this.selector.calendarId);
        this.contactLink = document.querySelector(this.selector.contactLink);
        this.contactId = document.querySelector(this.selector.contactId);

        const shouldContinue =
        !!this.headerLink &&
        !!this.headerId &&
        !!this.packagesLink &&
        !!this.packagesId &&
        !!this.calendarLink &&
        !!this.calendarId &&
        !!this.contactLink &&
        !!this.contactId;

        if(!shouldContinue) return;

        this.addListeners();

    }

    addListeners() {
        this.headerLink.addEventListener("click", ()=>{
            window.scrollTo(0, this.headerId.offsetTop-100);
        })

        this.packagesLink.addEventListener("click", ()=>{
            window.scrollTo(0, this.packagesId.offsetTop-100);
        })

        this.calendarLink.addEventListener("click", ()=>{
            window.scrollTo(0, this.calendarId.offsetTop-100);
        })

        this.contactLink.addEventListener("click", ()=>{
            window.scrollTo(0, this.contactId.offsetTop-100);
        })
    }
}
