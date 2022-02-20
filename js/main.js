const getRandomNumber = (minNumber, maxNumber) => {
  if (minNumber >= 0 && minNumber <= maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }

  return 'Минимальное значение меньше нуля или больше максимального!';
};

getRandomNumber(0, 10);


const getRandomValue = (minValue, maxValue, quantity) => {
  if (maxValue >= minValue && minValue >= 0) {
    const currentValue = Math.random() * (maxValue - minValue) + minValue;
    return currentValue.toFixed(quantity);
  }

  return 'Минимальное значение меньше нуля или больше максимального!';
};

getRandomValue(1.2, 1.5, 5);
