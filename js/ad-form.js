import {
  addModal,
  successModal,
  errorModal
} from './ad-form-modal.js';

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const adFormTitle = adForm.querySelector('#title');

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(adFormTitle, validateTitle, 'От 30 до 100 символов');

const adFormPrice = adForm.querySelector('#price');

const minPrices = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const validatePrice = (value) => {
  const typesOfHousing = adForm.querySelector('#type');

  return value <= 100000 && value > minPrices[typesOfHousing.value] || value === minPrices[typesOfHousing.value];
};

const getPriceErrorMessage = (value) => {
  const typesOfHousing = adForm.querySelector('#type');

  if (value > 100000) {
    return 'Максимальная цена 100000 руб.';
  }

  return `Минимальная цена ${minPrices[typesOfHousing.value]} руб.`;
};

const typesOfHousingList = adForm.querySelector('#type');

const onTypeChange = () => {
  adFormPrice.placeholder = minPrices[typesOfHousingList.value];
  pristine.validate(adFormPrice);
};

typesOfHousingList.addEventListener('change', onTypeChange);

pristine.addValidator(adFormPrice, validatePrice, getPriceErrorMessage);

const numberOfRooms = adForm.querySelector('#room_number');
const guestList = adForm.querySelector('#capacity');

const roomCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const validateCapacity = () => roomCapacity[numberOfRooms.value].includes(guestList.value);

const getErrorRoomsMessage = () =>
  `${numberOfRooms.value === '100' ? 'Не для' : 'Для'}
  ${numberOfRooms.value === '100' ? '' : roomCapacity[numberOfRooms.value].join(', ')}
  ${numberOfRooms.value === '1' ? 'гостя' : 'гостей'}`;

numberOfRooms.addEventListener('change', () => pristine.validate(guestList));
guestList.addEventListener('change', () => pristine.validate(numberOfRooms));

pristine.addValidator(numberOfRooms, validateCapacity, getErrorRoomsMessage);
pristine.addValidator(guestList, validateCapacity);

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const onTimeInChange = () => {
  timeOut.selectedIndex = timeIn.selectedIndex;
};

const onTimeOutChange = () => {
  timeIn.selectedIndex = timeOut.selectedIndex;
};

timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

adForm.addEventListener('submit' , (evt) => {
  const isValid = pristine.validate();

  if (isValid) {
    addModal(successModal);
  } else {
    evt.preventDefault();
    addModal(errorModal);
  }
});

export {adForm};
