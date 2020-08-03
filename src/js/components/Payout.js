import  {template} from '../settings.js';

class Payout{
  constructor(detailsPayout){
    const thisDetails = this;

    thisDetails.render(detailsPayout);
  }
  render(detailsPayout){
    const thisDetails = this;

    const generatedHTML = template.payout;

    thisDetails.dom = {};
    thisDetails.dom.wrapper = detailsPayout;
    thisDetails.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Payout;