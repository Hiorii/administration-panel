import {template} from '../settings.js';

class Links{
  constructor(linksElement){
    const thisLinks = this;
    
    thisLinks.render(linksElement);
  }
  render(linksElement){
    const thisLinks = this;

    const generatedHTML = template.links;

    thisLinks.dom = {};
    this.dom.wrapper = linksElement;
    this.dom.wrapper.innerHTML = generatedHTML;

    console.log(generatedHTML);
  }
}

export default Links;