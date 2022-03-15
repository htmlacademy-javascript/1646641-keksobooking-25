import {createArrayOfAds} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createArrayOfAds();
const adCardsFragment = document.createDocumentFragment();

similarAds.forEach(({offer, author}) => {
  const adCardCopy = adCardTemplate.cloneNode(true);

  const adCardTitle = adCardCopy.querySelector('.popup__title');
  adCardTitle.textContent = offer.title;

  const adCardAddress = adCardCopy.querySelector('.popup__text--address');
  adCardAddress.textContent = offer.address;

  const adCardPrice = adCardCopy.querySelector('.popup__text--price');
  adCardPrice.textContent = `${offer.price} ₽/ночь`;

  const adCardType = adCardCopy.querySelector('.popup__type');
  adCardType.textContent = offer.type;

  const adCardCapacity = adCardCopy.querySelector('.popup__text--capacity');
  adCardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  const adCardFeaturesContainer = adCardCopy.querySelector('.popup__features');
  const adCardFeaturesList = adCardFeaturesContainer.querySelectorAll('.popup__feature');

  adCardFeaturesList.forEach((featureItem) => {
    const isNecessary = offer.features.some((feature) =>
      featureItem.classList.contains(`popup__feature--${feature}`));

    if (!isNecessary) {
      featureItem.remove();
    }
  });

  const adCardTime = adCardCopy.querySelector('.popup__text--time');
  adCardTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const adCardDesc = adCardCopy.querySelector('.popup__description');
  adCardDesc.textContent = offer.description;

  const adCardPhotos = adCardCopy.querySelector('.popup__photos');
  const adCardPhoto = adCardPhotos.querySelector('.popup__photo');
  adCardPhotos.textContent = '';

  offer.photos.forEach((photo) => {
    const adCardPhotoCopy = adCardPhoto.cloneNode();
    adCardPhotoCopy.src = photo;
    adCardPhotos.append(adCardPhotoCopy);
  });

  const adCardAvatar = adCardCopy.querySelector('.popup__avatar');
  adCardAvatar.src = author.avatar;

  adCardsFragment.append(adCardCopy);
});

mapCanvas.append(adCardsFragment.firstElementChild);
