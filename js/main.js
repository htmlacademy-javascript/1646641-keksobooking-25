const getRandomNumber = (minNumber, maxNumber) => {
  minNumber = Math.abs(minNumber);
  maxNumber = Math.abs(maxNumber);

  if (minNumber > maxNumber) {
    const swap = minNumber;
    minNumber = maxNumber;
    maxNumber = swap;
  }

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

getRandomNumber(1, 10);


const getRandomFloat = (minNumber, maxNumber, quantity) => {
  minNumber = Math.abs(minNumber);
  maxNumber = Math.abs(maxNumber);

  if (minNumber > maxNumber) {
    const swap = minNumber;
    minNumber = maxNumber;
    maxNumber = swap;
  }

  const currentNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return currentNumber.toFixed(quantity);
};

getRandomFloat(1.1, 1.5, 5);
