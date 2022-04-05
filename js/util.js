const ALERT_SHOW_TIME = 5000;

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
  const randomElementIndex = getRandomPositiveInteger(0, array.length - 1);
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(randomElementIndex);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomElementOfArray,
  getRandomLengthArray,
  isEscapeKey,
  showAlert
};

