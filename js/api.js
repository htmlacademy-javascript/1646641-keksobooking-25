import {createAdMarkers} from './map.js';
import {showAlert} from './util.js';
import {setMapFilters} from './map-filters.js';
import {onResetButtonClick} from './reset.js';
import {
  addModal,
  errorModal,
  successModal
} from './ad-form-modal.js';

function getData () {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      createAdMarkers(ads);
      setMapFilters(ads);
    })
    .then(() => {
      const mapFiltersForm = document.querySelector('.map__filters');
      mapFiltersForm.classList.remove('map__filters--disabled');
    })
    .catch(() => {
      showAlert('Ошибка при загрузке данных. Попробуйте перезагрузить страницу.');
    });
}

function sendData (body, unblockSubmitButton)  {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        addModal(successModal);
        onResetButtonClick();
      } else {
        addModal(errorModal);
      }
      unblockSubmitButton();
    })
    .catch(() => {
      addModal(errorModal);
      unblockSubmitButton();
    });
}

export {getData, sendData};
