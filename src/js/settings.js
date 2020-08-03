export const select = {
  components: {
    sideBar: {
      sideBar: '.side-bar',
      hamburger: '.hamburger',
      navigation: '.navigation',
    },
    topBar: {
      topBar: '.top-bar',
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
  },
  navLinks: {
    general: '.side-links',
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
};