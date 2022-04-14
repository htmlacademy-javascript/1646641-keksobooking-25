import {map, mainMarker} from './map.js';
import {removeChosenPhotos} from './photo.js';
import {pristine} from './ad-form.js';

const adForm = document.querySelector('.ad-form');
const priceSlider = document.querySelector('.ad-form__slider');
const mapFiltersForm = document.querySelector('.map__filters');
const adFormReset = document.querySelector('.ad-form__reset');

const onResetButtonClick = () => {
  mainMarker.setLatLng(
    {
      lat: 35.67436,
      lng: 139.72798,
    }
  );

  map.setView({
    lat: 35.67436,
    lng: 139.72798,
  }, 12);

  map.closePopup();
  adForm.reset();
  removeChosenPhotos();
  priceSlider.noUiSlider.reset();
  mapFiltersForm.reset();
  pristine.reset();
};

adFormReset.addEventListener('click', onResetButtonClick);

export {onResetButtonClick};

