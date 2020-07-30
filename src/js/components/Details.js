import  {template} from '../settings.js';

class Details{
  constructor(detailsElement){
    const thisDetails = this;

    thisDetails.render(detailsElement);
  }
  render(detailsElement){
    const thisDetails = this;

    const generatedHTML = template.details;

    thisDetails.dom = {};
    thisDetails.dom.wrapper = detailsElement;
    thisDetails.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Details;