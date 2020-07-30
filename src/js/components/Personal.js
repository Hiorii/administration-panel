import {template} from '../settings.js';

class Personal{
  constructor(personalElement){
    const thisPersonal = this;

    thisPersonal.render(personalElement);
  }
  render(personalElement){
    const thisPersonal = this;

    const generatedHTML = template.personal;

    thisPersonal.dom = {};
    thisPersonal.dom.wrapper = personalElement;
    thisPersonal.dom.wrapper.innerHTML = generatedHTML;    
  }
}

export default Personal;