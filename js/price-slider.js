import {pristine} from './ad-form.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 300;

const Price = {
  MIN: 0,
  MAX: 100000,
};

const priceSlider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');
const typesOfHousingList = document.querySelector('#type');

noUiSlider.create(priceSlider, {
  range: {
    min: Price.MIN,
    max: Price.MAX,
  },
  start: priceField.value,
  step: 1000,
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

priceSlider.noUiSlider.on('slide', () => {
  priceField.value = priceSlider.noUiSlider.get();
  pristine.validate(priceField);
});

const onPriceChange = () => {
  priceSlider.noUiSlider.set(priceField.value);
};

typesOfHousingList.addEventListener('change', onPriceChange);
priceField.addEventListener('input', debounce(onPriceChange, RERENDER_DELAY));
