import {template} from '../settings.js';

class Banners {
  constructor(bannersElement) {
    const thisBanners = this;

    thisBanners.render(bannersElement);
  }

  render(bannersElement) {
    const thisBanners = this;

    const generatedHTML = template.banners;

    thisBanners.dom = {};
    thisBanners.dom.wrapper = bannersElement;
    thisBanners.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Banners;