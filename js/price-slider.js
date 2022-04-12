import {pristine} from './ad-form.js';

const Price = {
  MIN: 0,
  MAX: 100000,
  DEFAULT: 5000,
};

const priceSlider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

priceField.value = Price.DEFAULT;

noUiSlider.create(priceSlider, {
  range: {
    min: Price.MIN,
    max: Price.MAX,
  },
  start: Price.DEFAULT,
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
