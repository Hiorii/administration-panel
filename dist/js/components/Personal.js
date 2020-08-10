import {template, select} from '../settings.js';

class Personal{
  constructor(personalElement){
    const thisPersonal = this;

    thisPersonal.render(personalElement);
    thisPersonal.validate();
  }
  render(personalElement){
    const thisPersonal = this;

    const generatedHTML = template.personal;

    thisPersonal.dom = {};
    thisPersonal.dom.wrapper = personalElement;
    thisPersonal.dom.wrapper.innerHTML = generatedHTML;    
  }
  validate() {
    const nameField = document.querySelector(select.components.personal.name);
    const surnameField = document.querySelector(select.components.personal.surname);
    const emailField = document.querySelector(select.components.personal.email);
    const passwordField = document.querySelector(select.components.personal.password);
    const rePasswordField = document.querySelector(select.components.personal.rePassword);
    const message = document.querySelector(select.components.personal.message);
    const submitButton = document.querySelector(select.components.personal.submit);
    const inputs = document.querySelectorAll(select.components.personal.input);

    /* Inputs */
    for(let input of inputs) {
      input.addEventListener('keyup', ()=> {
        if(input.value !== '' && input.value.length >= 3){
          input.style.border = '2px solid green';
          emailField.style.border = '1px solid #DCDCDC';
          rePasswordField.style.border = '1px solid #DCDCDC';
          emailField.addEventListener('focusout', ()=>{
            if(emailField.value.indexOf('@') < 0 || emailField.value.indexOf('.') < 0){
              message.style.visibility = 'visible';
              message.innerHTML = 'Insert correct password!';
              setTimeout(()=>{
                message.style.visibility = 'hidden';
              },4000);
            } else {
              input.style.border = '2px solid green';
            }
          });
        } else {
          input.style.border = '1px solid #DCDCDC';
        }
      });
    }

    /* Password */

    rePasswordField.addEventListener('keyup', () => {
      if(passwordField.value !== rePasswordField.value) {
        rePasswordField.addEventListener('focusout', ()=>{
          message.style.visibility = 'visible';
          message.innerHTML = 'Password repeat must be the same!';
          setTimeout(()=>{
            message.style.visibility = 'hidden';
          }, 4000);
        });
      }else {
        rePasswordField.style.border = '2px solid green';
      }
    });

    /* Submit button */
    submitButton.style.opacity = '0.4';

    submitButton.addEventListener('click', () => {
      if
      (
        nameField.value === '' ||
        surnameField.value === '' ||
        emailField.value === '' ||
        passwordField.value === '' ||
        rePasswordField.value === ''
      ) {
        message.style.visibility = 'visible';
        message.innerHTML = 'Fulfill all required fields';
        setTimeout(()=>{
          message.style.visibility = 'hidden';
        }, 4000);
        if (nameField.value === '') {
          nameField.style.border = '2px solid red';
        }
        if (surnameField.value === '') {
          surnameField.style.border = '2px solid red';
        }
        if (emailField.value === '') {
          emailField.style.border = '2px solid red';
        }
        if (passwordField.value === '') {
          passwordField.style.border = '2px solid red';
        }
        if (rePasswordField.value === '') {
          rePasswordField.style.border = '2px solid red';
        }
      } else {
        submitButton.style.opacity = '1';
      }
    });
  }
}

export default Personal;