import {select, classNames} from '../js/settings.js';
import General from './components/General.js';
import Links from './components/Links.js';
import Banners from './components/Banners.js';

const app = {
  init: function(){
    const thisApp = this;
    
    thisApp.initPages();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.initBanners();
  },
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navLinks.general);
    
    const idFromHash = window.location.hash.replace('#/', ''); 

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id === idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(e){
        const clickedElement = this;
        
        e.preventDefault();
        
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        thisApp.activePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },
  activePage: function(pageId){
    const thisApp = this;
   
    for(let page of thisApp.pages){      
      page.classList.toggle(
        classNames.pages.active, 
        page.id == pageId);
    }    

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.navLinks.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initGeneral: function(){
    const thisApp = this;

    const generalElement = document.querySelector(select.containerOf.general);

    thisApp.general = new General(generalElement);
  },
  initLinks: function(){
    const thisApp = this;

    const linksElement = document.querySelector(select.containerOf.links);

    thisApp.links = new Links(linksElement);
  },
  initBanners: function(){
    const thisApp = this;

    const bannersElement = document.querySelector(select.containerOf.banners);

    thisApp.banners = new Banners(bannersElement);
  }  
};

app.init();