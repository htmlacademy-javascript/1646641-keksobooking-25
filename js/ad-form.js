import {sendData} from './api.js';

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

  return value <= 100000 && value >= minPrices[typesOfHousing.value] && value !== '';
};

const getPriceErrorMessage = (value) => {
  const typesOfHousing = adForm.querySelector('#type');

  if (value > 100000) {
    return 'Максимальная цена 100000 руб.';
  }

  return `Минимальная цена ${minPrices[typesOfHousing.value]} руб.`;
};

const typesOfHousingList = adForm.querySelector('#type');

const onTypeChange = ({target}) => {
  const value = target.value;
  adFormPrice.placeholder = minPrices[value];
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

const adFormTimes = adForm.querySelector('.ad-form__element--time');
const timeIn = adFormTimes.querySelector('#timein');
const timeOut = adFormTimes.querySelector('#timeout');

const onTimeChange = (evt) => {
  if (evt.target.matches('#timein')) {
    timeOut.selectedIndex = timeIn.selectedIndex;
  }

  if (evt.target.matches('#timeout')) {
    timeIn.selectedIndex = timeOut.selectedIndex;
  }
};

adFormTimes.addEventListener('change', onTimeChange);

const submitButton = adForm.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.removeAttribute('disabled');
};

adForm.addEventListener('submit' , (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(
      new FormData(evt.target),
      unblockSubmitButton
    );
  } else {
    pristine.addError(adForm);
    blockSubmitButton();
  }
});

export {pristine};
