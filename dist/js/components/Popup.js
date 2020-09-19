import {select, template} from '../settings.js';

class Popup {
  constructor(popupElement) {
    const thisPopup = this;

    thisPopup.render(popupElement);
    // thisPopup.closingPop();
    // thisPopup.check();
  }

  render(popupElement) {
    const thisPopup = this;

    const generatedHTML = template.popup;
    const popupMain = document.querySelector(select.components.popups.main);
    const visablePopupManager = document.querySelector(select.components.popups.popupManager);
    const visablePopupExit = document.querySelector(select.components.popups.popupExit);
    const visablePopupLogin = document.querySelector(select.components.popups.popupLogin);
    const linkList = document.querySelectorAll(select.navLinks.popups);

    thisPopup.dom = {};
    thisPopup.dom.wrapper = popupElement;
    thisPopup.dom.wrapper.innerHTML = generatedHTML;

    for (let singleLink of linkList) {
      singleLink.addEventListener('click', function (e) {
        const clickedElement = this;

        e.preventDefault();

        if (clickedElement.classList.contains('manager-link')) {
          popupMain.classList.add('popup-active');
          visablePopupManager.classList.add('manager-active');
          thisPopup.closingPop(popupMain, visablePopupManager);
        } else if (clickedElement.classList.contains('exit-link')) {
          popupMain.classList.add('popup-active');
          visablePopupExit.classList.add('exit-active');
          thisPopup.closingPop(popupMain, visablePopupExit);
        } else if (clickedElement.classList.contains('login-link')) {
          popupMain.classList.add('popup-active');
          visablePopupLogin.classList.add('login-active');
          thisPopup.closingPop(popupMain, visablePopupLogin);
        }
      });
    }
  }

  closingPop(popupMain, currentActive) {
    const closeButton = document.querySelectorAll(select.components.popups.exitButton);

    function closeModal(data) {
      data.classList.value = 'popup';
      data.classList.remove('.popup-active');
    }

    closeButton.forEach(function (btn) {
      console.log(btn);
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(popupMain);
        currentActive.classList.remove('manager-active');
        currentActive.classList.remove('exit-active');
        currentActive.classList.remove('login-active');
      });
    });

    popupMain.addEventListener('click', function (e) {

      if (e.target === this) {
        closeModal(popupMain);
        currentActive.classList.remove('manager-active');
        currentActive.classList.remove('exit-active');
        currentActive.classList.remove('login-active');
      }
    });

    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        closeModal(popupMain);
        currentActive.classList.remove('manager-active');
        currentActive.classList.remove('exit-active');
        currentActive.classList.remove('login-active');
      }
    });
  }

  // check() {
  //   const ddd = document.querySelector('.omglol');
  //   const popupMain = document.querySelector(select.components.popups.main);
  //   const visablePopupManager = document.querySelector(select.components.popups.popupManager);
  //   console.log(ddd);
  //
  //   const clickedElement = this;
  //   ddd.addEventListener('click', (e)=>{
  //     e.preventDefault();
  //     console.log(e.target);
  //
  //     console.log(popupMain);
  //     popupMain.classList.add('popup-active');
  //     visablePopupManager.classList.add('manager-active');
  //
  //   });
  // }
}

export default Popup;

// import {select, template} from '../settings.js';
//
// class TestCos{
//   constructor(popupElement){
//     const thisTestCos  = this;
//
//     thisTestCos.check(popupElement);
//     // thisPopup.closingPop();
//   }
//   check(popupElement) {
//     const thisPopup  = this;
//     const generatedHTML = template.popup;
//
//
//     thisPopup.dom  = {};
//     thisPopup.dom.wrapper = popupElement;
//     thisPopup.dom.wrapper.innerHTML = generatedHTML;
//
//     const ddd = document.querySelector('.omglol');
//     const popupMain = document.querySelector(select.components.popups.main);
//     const visablePopupManager = document.querySelector(select.components.popups.popupManager);
//     console.log(ddd);
//
//     ddd.addEventListener('click', (e)=>{
//       e.preventDefault();
//       console.log(e.target);
//
//       console.log(popupMain);
//       popupMain.classList.add('popup-active');
//       visablePopupManager.classList.add('manager-active');
//
//     });
//   }
// }
//
// export default TestCos;