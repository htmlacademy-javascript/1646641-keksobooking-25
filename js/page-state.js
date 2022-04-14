const mapFiltersForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
const mapFeaturesContainer = mapFiltersForm.querySelector('.map__features');
const adFormElementsList = adForm.querySelectorAll('.ad-form__element');
const priceSlider = document.querySelector('.ad-form__slider');

const setDisabledAttribute = (list) => {
  list.forEach((element) => {
    element.disabled = true;
  });
};

const removeDisabledAttribute = (list) => {
  list.forEach((element) => {
    element.disabled = false;
  });
};

const addDisabledStateOfPage = () => {
  mapFiltersForm.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');

  mapFeaturesContainer.disabled = true;
  priceSlider.disabled = true;

  setDisabledAttribute([...mapFiltersList, ...adFormElementsList]);
};

const removeDisabledStateOfPage = () => {
  adForm.classList.remove('ad-form--disabled');

  mapFeaturesContainer.disabled = false;
  priceSlider.disabled = false;

  removeDisabledAttribute([...mapFiltersList, ...adFormElementsList]);
};

addDisabledStateOfPage();

export {removeDisabledStateOfPage};
