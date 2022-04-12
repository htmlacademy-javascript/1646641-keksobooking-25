import {createAdMarkers, removeAdMarkers} from './map.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

const MiddlePrice = {
  MIN: 10000,
  MAX: 50000
};

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;


const mapFiltersForm = document.querySelector('.map__filters');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');

const filterHousingType = (ad) => {

  if (housingType.value !== 'any') {
    return housingType.value === ad.offer.type;
  }

  return ad;
};

const filterHousingPrice = (ad) => {

  if (housingPrice.value === 'middle') {
    return ad.offer.price >= MiddlePrice.MIN && ad.offer.price <= MiddlePrice.MAX;
  }
  if (housingPrice.value === 'low') {
    return ad.offer.price <= LOW_PRICE;
  }
  if (housingPrice.value === 'high') {
    return ad.offer.price >= HIGH_PRICE;
  }

  return ad;
};

const filterHousingCapacity = (ad, filter, capacityValue) => {

  if (filter.value !== 'any') {
    return Number(filter.value) === capacityValue;
  }

  return ad;
};

const filterFeatures = (ad) => {
  const checkedFeatures = mapFiltersForm.querySelectorAll('input[name=features]:checked');

  if (!checkedFeatures.length) {
    return ad;
  }

  const arrayOfFeatures = [...checkedFeatures];

  return arrayOfFeatures.every((feature) => {
    if (ad.offer.features) {
      return ad.offer.features.includes(feature.value);
    }
  });
};

const setMapFilters = (ads) => {
  const filterAds = (evt) => {
    removeAdMarkers();

    if (evt.target.matches('.map__filter') || evt.target.matches('.map__checkbox')) {
      const adsFilter = ads
        .filter((ad) => filterHousingType(ad) && filterHousingPrice(ad) &&
        filterHousingCapacity(ad, housingRooms, ad.offer.rooms) &&
        filterHousingCapacity(ad, housingGuests, ad.offer.guests) && filterFeatures(ad));

      createAdMarkers(adsFilter);
    }
  };

  mapFiltersForm.addEventListener('change', debounce(filterAds, RERENDER_DELAY));

  mapFiltersForm.addEventListener('reset', () => {
    removeAdMarkers();
    createAdMarkers(ads);
  });
};

export {setMapFilters};
