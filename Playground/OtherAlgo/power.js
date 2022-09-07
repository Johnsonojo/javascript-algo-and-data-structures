const power = (x, n) => {
  return x ** n;
};
console.log(power(2.0, 10));

const power2 = (x, n) => {
  let result = 1;
  let positiveSignOnExponent = Math.sign(n) === 1;

  if (x === 1 || n === 0) return 1;
  if (n === 1) return x;
  if (x === 1 && !positiveSignOnExponent) return 1;
  if (x === -1 && positiveSignOnExponent) return -1;

  for (let i = 0; i < Math.abs(n); i++) {
    result *= x;
  }
  return positiveSignOnExponent ? result : 1 / result;
};

console.log(power2(2.0, -10));

const squareRoot = (x) => {
  let square = 1;
  let i = 0;
  while (true) {
    i = i + 1;
    square = (x / square + square) / 2;
    if (i == x + 1) {
      break;
    }
  }
  return Math.floor(square);
};
console.log(squareRoot(8));
