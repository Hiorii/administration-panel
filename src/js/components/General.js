import {template} from '../settings.js';

class  General{
  constructor(generalElement){
    const thisGeneral = this;

    thisGeneral.render(generalElement);
  }
  render(generalElement){
    const thisGeneral = this;

    const generatedHTML = template.general;    

    thisGeneral.dom= {};
    thisGeneral.dom.wrapper = generalElement;
    thisGeneral.dom.wrapper.innerHTML = generatedHTML;    
  }
}

export default General;