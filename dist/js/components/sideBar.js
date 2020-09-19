import {select} from '../settings.js';

class SideBar {
  constructor() {
    const thisSideBar = this;

    thisSideBar.render();
  }

  render() {
    const hamburger = document.querySelector(select.components.sideBar.hamburger);
    const sideBar = document.querySelector(select.components.sideBar.sideBar);
    const topBar = document.querySelector(select.components.topBar.topBar);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) {
        sideBar.classList.remove('side-bar-active');
        topBar.classList.remove('nav-list-top-active-in');
      }
    });

    const handleClick = () => {
      sideBar.classList.toggle('side-bar-active');
      topBar.classList.toggle('nav-list-top-active-in');
    };
    hamburger.addEventListener('click', handleClick);
  }
}

export default SideBar;

