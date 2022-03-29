import {pristine} from './ad-form.js';

const priceSlider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

priceField.value = 5000;

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return Math.floor(value);
    },
    from: function (value) {
      return value;
    }
  }
});

priceSlider.noUiSlider.on('update', () => {
  priceField.value = priceSlider.noUiSlider.get();
  pristine.validate(priceField);
});
