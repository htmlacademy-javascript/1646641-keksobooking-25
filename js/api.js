import {createAdMarkers} from './map.js';
import {onResetButtonClick} from './map.js';
import {showAlert} from './util.js';
import {
  addModal,
  errorModal,
  successModal
} from './ad-form-modal.js';

const SIMILAR_AD_COUNT = 10;

function getData () {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      createAdMarkers(ads.slice(0, SIMILAR_AD_COUNT));
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
