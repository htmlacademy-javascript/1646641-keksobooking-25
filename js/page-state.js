import {adForm} from './ad-form.js';
import {mapFiltersForm} from './map-filters.js';

const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
const mapFeaturesContainer = mapFiltersForm.querySelector('.map__features');
const adFormElementsList = adForm.querySelectorAll('.ad-form__element');
const priceSlider = document.querySelector('.ad-form__slider');

const setDisabledAttribute = (list) => {
  list.forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const removeDisabledAttribute = (list) => {
  list.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const addDisabledStateOfPage = () => {
  mapFiltersForm.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');

  mapFeaturesContainer.setAttribute('disabled', true);
  priceSlider.setAttribute('disabled', true);

  setDisabledAttribute([...mapFiltersList, ...adFormElementsList]);
};

const removeDisabledStateOfPage = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');

  mapFeaturesContainer.removeAttribute('disabled');
  priceSlider.removeAttribute('disabled');

  removeDisabledAttribute([...mapFiltersList, ...adFormElementsList]);
};

addDisabledStateOfPage();

export {removeDisabledStateOfPage};
