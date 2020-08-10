import {template} from '../settings.js';

class Postback{
  constructor(detailsPostback){
    const thisPostback = this;

    thisPostback.render(detailsPostback);
  }
  render(detailsPostback){
    const thisPostback = this;

    const generatedHTML = template.postback;

    thisPostback.dom = {};
    thisPostback.dom.wrapper = detailsPostback;
    thisPostback.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Postback;