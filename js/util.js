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

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomElementOfArray,
  getRandomLengthArray
};

