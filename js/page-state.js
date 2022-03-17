const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersList = mapFiltersForm.querySelectorAll('.map__filter');
const mapFeaturesContainer = mapFiltersForm.querySelector('.map__features');
const adForm = document.querySelector('.ad-form');
const adFormElementsList = adForm.querySelectorAll('.ad-form__element');

const setDisabledAttribute = (list) => {
  list.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
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

  mapFeaturesContainer.setAttribute('disabled', 'disabled');

  setDisabledAttribute(mapFiltersList);
  setDisabledAttribute(adFormElementsList);
};

const removeDisabledStateOfPage = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');

  mapFeaturesContainer.removeAttribute('disabled');

  removeDisabledAttribute(mapFiltersList);
  removeDisabledAttribute(adFormElementsList);
};

addDisabledStateOfPage();
removeDisabledStateOfPage();
