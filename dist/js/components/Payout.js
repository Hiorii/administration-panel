import {select, template} from '../settings.js';

class Payout {
  constructor(detailsPayout) {
    const thisDetails = this;

    thisDetails.render(detailsPayout);
    thisDetails.setDate();
  }

  render(detailsPayout) {
    const thisDetails = this;

    const generatedHTML = template.payout;

    thisDetails.dom = {};
    thisDetails.dom.wrapper = detailsPayout;
    thisDetails.dom.wrapper.innerHTML = generatedHTML;
  }

  setDate() {
    const dateInputs = document.querySelectorAll(select.components.details.dateInput);

    for (let dateInput of dateInputs) {
      dateInput.valueAsDate = new Date();
    }
  }
}

export default Payout;