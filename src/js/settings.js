export const select = {
  sideBar: {
    hamburger: '.hamburger',
    navigation: '.navigation',
  },
  templateOf: {
    general: 'wrapper-general',
    links: 'wrapper-links',
    banners: 'wrapper-banners',
    personal: 'wrapper-personal',
    details: 'wrapper-details',
  },  
  containerOf: {
    pages: '#pages',
    general: '.general-wrapper',
    links: '.links-wrapper',
    banners: '.banners-wrapper',
    personal: '.personal-wrapper',
    details: '.details-wrapper',
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
};