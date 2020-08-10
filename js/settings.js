export const select = {
  components: {
    sideBar: {
      sideBar: '.side-bar',
      hamburger: '.hamburger',
      navigation: '.navigation',
    },
    topBar: {
      topBar: '.top-bar',
    },
    details: {
      dateInput: 'input[type="date"]',
    },
    personal: {
      input: '.form-personal-data  .form-inner input',
      name: '#name',
      surname: '#surname',
      email: '#email',
      password: '#password',
      rePassword: '#repeat',
      message: '.message',
      submit: '#submitPersonal',
    },
    popups: {
      main: '.popup',
      popupManager: '.popup-manager',
      popupExit: '.popup-exit',
      popupLogin: '.popup-login',
      exitButton: '.close',
    }
  },  
  templateOf: {
    general: 'wrapper-general',
    links: 'wrapper-links',
    banners: 'wrapper-banners',
    personal: 'wrapper-personal',
    details: 'wrapper-details',
    payout: 'wrapper-payout',
    popup: 'wrapper-popup',
    postback: 'wrapper-postback',
  },  
  containerOf: {
    pages: '#pages',
    general: '.general-wrapper',
    links: '.links-wrapper',
    banners: '.banners-wrapper',
    personal: '.personal-wrapper',
    details: '.details-wrapper',
    payout: '.payout-wrapper',
    popup: '.popup-wrapper',
    postback: '.postback-wrapper',
  },
  navLinks: {
    general: '.side-links',
    popups: '.popup-links',
  }
};
export const classNames = {
  navLinks: {
    active: 'active',
  },
  pages: {
    active:  'active',
  }
};
export const template = {
  general: document.getElementById(select.templateOf.general).innerHTML,
  links: document.getElementById(select.templateOf.links).innerHTML,
  banners: document.getElementById(select.templateOf.banners).innerHTML,
  personal: document.getElementById(select.templateOf.personal).innerHTML,
  details: document.getElementById(select.templateOf.details).innerHTML,
  payout: document.getElementById(select.templateOf.payout).innerHTML,
  popup: document.getElementById(select.templateOf.popup).innerHTML,
  postback: document.getElementById(select.templateOf.postback).innerHTML,
};