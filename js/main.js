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

const checkInOutTimes = [
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

const getRandomElementOfArray = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const shuffleArray = (array) => {
  const copiedArray = array.slice();

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = copiedArray[i];
    copiedArray[i] = copiedArray[randomIndex];
    copiedArray[randomIndex] = temp;
  }

  return copiedArray;
};

const getRandomLengthArray = (array) => {
  const randomElementIndex = getRandomPositiveInteger(1, array.length - 1);
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, randomElementIndex);
};

const createAd = (element, index) => {
  const randomLat = getRandomPositiveFloat(Location.LAT_MIN, Location.LAT_MAX, Location.DIGITS);
  const randomLng = getRandomPositiveFloat(Location.LNG_MIN, Location.LNG_MAX, Location.DIGITS);

  index = index < 9 ? `0${++index}` : ++index;

  return {
    author: {
      avatar: `img/avatars/user${index}.png`,
    },

    offer: {
      title: getRandomElementOfArray(titles),
      address: `${randomLat}, ${randomLng}`,
      price: getRandomPositiveInteger(Price.MIN_PRICE, Price.MAX_PRICE),
      type: getRandomElementOfArray(types),
      rooms: getRandomPositiveInteger(Rooms.MIN_NUM, Rooms.MAX_NUM),
      guests: getRandomPositiveInteger(Guests.MIN_NUM, Guests.MAX_NUM),
      checkin: getRandomElementOfArray(checkInOutTimes),
      checkout: getRandomElementOfArray(checkInOutTimes),
      features: getRandomLengthArray(features),
      description: getRandomElementOfArray(descriptions),
      photos: getRandomLengthArray(photos),
    },

    location: {
      lat: randomLat,
      lng: randomLng,
    }
  };
};

Array.from({length: SIMILAR_AD_COUNT}, createAd);
