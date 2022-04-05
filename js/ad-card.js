const renderAdCard = (offer, author) => {
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    features,
    photos,
    checkin,
    checkout,
    description
  } = offer;

  const {avatar} = author;

  const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const adCard = adCardTemplate.cloneNode(true);

  const adCardTitle = adCard.querySelector('.popup__title');
  adCardTitle.textContent = title;

  const adCardAddress = adCard.querySelector('.popup__text--address');
  adCardAddress.textContent = address;

  const adCardPrice = adCard.querySelector('.popup__text--price');
  adCardPrice.textContent = `${price} ₽/ночь`;

  const adCardType = adCard.querySelector('.popup__type');
  adCardType.textContent = type;

  const adCardCapacity = adCard.querySelector('.popup__text--capacity');
  adCardCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;

  const adCardFeaturesContainer = adCard.querySelector('.popup__features');
  const adCardFeaturesList = adCardFeaturesContainer.querySelectorAll('.popup__feature');

  const addFeaturesList = () => {
    adCardFeaturesList.forEach((featureItem) => {
      const isNecessary = features.some((feature) =>
        featureItem.classList.contains(`popup__feature--${feature}`));

      if (!isNecessary) {
        featureItem.remove();
      }
    });
  };

  if (!features) {
    adCardFeaturesContainer.remove();
  } else {
    addFeaturesList();
  }

  const adCardPhotos = adCard.querySelector('.popup__photos');
  const adCardPhoto = adCardPhotos.querySelector('.popup__photo');
  adCardPhotos.textContent = '';

  const addPhotosList = () => {
    photos.forEach((photo) => {
      const adCardPhotoCopy = adCardPhoto.cloneNode();
      adCardPhotoCopy.src = photo;
      adCardPhotos.append(adCardPhotoCopy);
    });
  };

  if (!photos) {
    adCardPhotos.remove();
  } else {
    addPhotosList();
  }

  const adCardTime = adCard.querySelector('.popup__text--time');
  adCardTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const adCardDesc = adCard.querySelector('.popup__description');

  if (!description) {
    adCardDesc.remove();
  } else {
    adCardDesc.textContent = description;
  }

  const adCardAvatar = adCard.querySelector('.popup__avatar');
  adCardAvatar.src = avatar;

  return adCard;
};

export {renderAdCard};
