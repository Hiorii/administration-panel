import {select, classNames} from '../js/settings.js';
import General from './components/General.js';
import Links from './components/Links.js';
import Banners from './components/Banners.js';
import Personal from './components/Personal.js';
import Details from './components/Details.js';
import Payout from './components/Payout.js';
import Popup from './components/Popup.js';
import SideBar from './components/sideBar.js';

const app = {
  init: function(){
    const thisApp = this;
    
    thisApp.initPages();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.initBanners();
    thisApp.initPersonal();
    thisApp.initDetails();
    thisApp.initPayout();
    thisApp.initPopouts();
    thisApp.initSideBar();
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
  },
  initPersonal: function(){
    const thisPersonal = this;

    const personalElement = document.querySelector(select.containerOf.personal);

    thisPersonal.personal = new Personal(personalElement);
  },
  initDetails: function(){
    const thisDetails = this;

    const detailsElement = document.querySelector(select.containerOf.details);

    thisDetails.details = new Details(detailsElement);
  },
  initPayout: function(){
    const thisPayout = this;

    const payoutElement = document.querySelector(select.containerOf.payout);

    thisPayout.payout = new Payout(payoutElement);
  },
  initPopouts: function(){
    const thisPopup = this;

    const popupElement = document.querySelector(select.containerOf.popup);

    thisPopup.popup = new Popup(popupElement);
  },
  initSideBar: function(){
    const thisSideBar = this;

    thisSideBar.sidebar = new SideBar(); 
  }  
};

app.init();