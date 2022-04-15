import {createAdMarkers} from './map.js';
import {showAlert} from './util.js';
import {setMapFilters} from './map-filters.js';
import {onResetButtonClick} from './reset.js';
import {
  addModal,
  errorModal,
  successModal
} from './ad-form-modal.js';

const ADDRESS_TO_SEND_DATA = 'https://25.javascript.pages.academy/keksobooking';

function getData (address) {
  fetch(address)
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
    ADDRESS_TO_SEND_DATA,
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
