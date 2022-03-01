const avatars = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];

const titles = [
  'Хижина в лесу',
  'Райское местечко',
  'Отель Гранд Будапешт',
  'Дом, который построил Джек',
  'Квартира в аренду'
];

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const checkoutTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const descriptions = [
  'Для деловых встреч и конференций',
  'Уютная квартира в центре Токио',
  'Место, которое не забудешь никогда',
  'Раскошный отель со всеми удобствами',
  'Место для всей семьи'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const Price = {
  MIN_PRICE: 0,
  MAX_PRICE: 100000,
};

const Rooms = {
  MIN_NUM: 1,
  MAX_NUM: 100,
};

const Guests = {
  MIN_NUM: 1,
  MAX_NUM: 100,
};

const Location = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
  DIGITS: 5,
};

const SIMILAR_AD_COUNT = 10;


const getRandomPositiveInteger = (a, b) => {
  const minNum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxNum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (maxNum - minNum + 1) + minNum;

  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const minNum = Math.min(Math.abs(a), Math.abs(b));
  const maxNum = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (maxNum - minNum) + minNum;

  return Number(result.toFixed(digits));
};

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const removeRandomArrayElement = (array) => {
  const randomElementIndex = getRandomPositiveInteger(0, array.length - 1);
  const removedRandomElement = array.splice(randomElementIndex, 1);
  return removedRandomElement.join();
};

const getRandomLengthArray = (array) => {
  const randomElementIndex = getRandomPositiveInteger(1, array.length - 1);
  return array.slice(0, randomElementIndex);
};

const CreateSimilarAd = () => {
  const randomLat = getRandomPositiveFloat(Location.LAT_MIN, Location.LAT_MAX, Location.DIGITS);
  const randomLng = getRandomPositiveFloat(Location.LNG_MIN, Location.LNG_MAX, Location.DIGITS);

  return {
    author: {
      avatar: removeRandomArrayElement(avatars),
    },

    offer: {
      title: getRandomArrayElement(titles),
      address:  `${randomLat}, ${randomLng}`,
      price: getRandomPositiveInteger(Price.MIN_PRICE, Price.MAX_PRICE),
      type: getRandomArrayElement(types),
      rooms: getRandomPositiveInteger(Rooms.MIN_NUM, Rooms.MAX_NUM),
      guests: getRandomPositiveInteger(Guests.MIN_NUM, Guests.MAX_NUM),
      checkin: getRandomArrayElement(checkinTimes),
      checkout: getRandomArrayElement(checkoutTimes),
      features: getRandomLengthArray(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomLengthArray(photos),
    },

    location: {
      lat: randomLat,
      lng: randomLng,
    }
  };
};

Array.from({length: SIMILAR_AD_COUNT}, CreateSimilarAd);
