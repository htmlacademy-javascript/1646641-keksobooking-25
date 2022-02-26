const getRandomPositiveInteger = (a, b) => {
  const minNum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxNum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (maxNum - minNum + 1) + minNum;

  return Math.floor(result);
};

getRandomPositiveInteger(1, 10);


const getRandomPositiveFloat = (a, b, digits = 1) => {
  const minNum = Math.min(Math.abs(a), Math.abs(b));
  const maxNum = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (maxNum - minNum) + minNum;

  return Number(result.toFixed(digits));
};

getRandomPositiveFloat(1.2, 5.5, 3);
