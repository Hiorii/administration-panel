import {select, template} from '../settings.js';

class Details {
  constructor(detailsElement) {
    const thisDetails = this;

    thisDetails.render(detailsElement);
    thisDetails.setDate();
  }

  render(detailsElement) {
    const thisDetails = this;

    const generatedHTML = template.details;

    thisDetails.dom = {};
    thisDetails.dom.wrapper = detailsElement;
    thisDetails.dom.wrapper.innerHTML = generatedHTML;
  }

  setDate() {
    const dateInputs = document.querySelectorAll(select.components.details.dateInput);

    for (let dateInput of dateInputs) {
      dateInput.valueAsDate = new Date();
    }
  }
}

export default Details;