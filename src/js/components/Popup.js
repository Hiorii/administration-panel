import  {template, select} from '../settings.js';

class Popup{
  constructor(popupElement){
    const thisPopup  = this;

    thisPopup.render(popupElement);
  }
  render(popupElement){
    const thisPopup = this;

    const generatedHTML = template.popup;    
    const popupMain = document.querySelector('.popup');
    const visablePopupManager = document.querySelector('.popup-manager');
    const visablePopupExit = document.querySelector('.popup-exit');
    const visablePopupLogin = document.querySelector('.popup-login');
    const linkList = document.querySelectorAll(select.navLinks.general);

    thisPopup.dom  = {};
    thisPopup.dom.wrapper = popupElement;
    thisPopup.dom.wrapper.innerHTML = generatedHTML;
    
    for(let singleLink of linkList){
      singleLink.addEventListener('click', function(e){
        const clickedElement = this;
       
        e.preventDefault();       
       
        if(clickedElement.classList.contains('manager-link')){
          popupMain.classList.add('popup-active');
          visablePopupManager.classList.add('manager-active');
        } else if(clickedElement.classList.contains('exit-link')){          
          popupMain.classList.add('popup-active');
          visablePopupExit.classList.add('exit-active');
        } else if(clickedElement.classList.contains('login-link')) {
          popupMain.classList.add('popup-active');
          visablePopupLogin.classList.add('login-active');
        }
      });
    }   




  }
}

export default Popup;