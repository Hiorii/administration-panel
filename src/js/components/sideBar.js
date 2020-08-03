import {select} from '../settings.js';

class SideBar {
  constructor(){
    const thisSideBar = this;

    thisSideBar.render();
  }
  render() {
    const hamburger = document.querySelector(select.components.sideBar.hamburger);
    const sideBar = document.querySelector(select.components.sideBar.sideBar);
    const topBar = document.querySelector(select.components.topBar.topBar);

    console.log(window.innerWidth);

    window.addEventListener('resize', () => {
      if(window.innerWidth <= 820) {       
        sideBar.classList.add('side-bar-active');
        topBar.classList.add('top-bar-active');    
        hamburger.addEventListener('click', handleClick);    
      } else {        
        sideBar.classList.remove('side-bar-active');
        topBar.classList.remove('top-bar-active');
        topBar.classList.remove('nav-list-top-active-in'); 
      }
    });

    const handleClick = () => {
      console.log('clicked');

      sideBar.classList.toggle('side-bar-active');
      if(sideBar.getAttribute('class') === 'side-bar'){
        topBar.classList.toggle('nav-list-top-active-in');            
      }      
    };  
  }
}

export default SideBar;

