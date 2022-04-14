import {removeDisabledStateOfPage} from './page-state.js';
import {getData} from './api.js';
import {renderAdCard} from './ad-card.js';

const SIMILAR_AD_COUNT = 10;

const map = L.map('map-canvas')
  .on('load', () => {
    removeDisabledStateOfPage();
    getData();
  })
  .setView({
    lat: 35.67436,
    lng: 139.72798,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const mainMarkerIcon = L.icon(
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  }
);

const mainMarker = L.marker(
  {
    lat: 35.67436,
    lng: 139.72798,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  }
).addTo(map);

const adFormAddress = document.querySelector('#address');
adFormAddress.value = '35.67436, 139.72798';

mainMarker.on('moveend', (evt) => {
  const currentLatLng = evt.target.getLatLng();
  adFormAddress.value = `${currentLatLng.lat.toFixed(5)}, ${currentLatLng.lng.toFixed(5)}`;
});

const adMarkerIcon = L.icon(
  {
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }
);

const createAdMarkers = (ads) => {
  ads
    .slice(0, SIMILAR_AD_COUNT)
    .forEach(({location, offer, author}) => {
      const {lat, lng} = location;

      const adMarker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon: adMarkerIcon,
        }
      );

      adMarker
        .addTo(markerGroup)
        .bindPopup(renderAdCard(offer, author));
    });
};


const removeAdMarkers = () => {
  markerGroup.clearLayers();
};

export {
  createAdMarkers,
  removeAdMarkers,
  map,
  mainMarker
};
