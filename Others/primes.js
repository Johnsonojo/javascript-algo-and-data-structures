// marcduiker
// Powerline
// Stelbent.minimal

const generatePrimeNumbers = (num) => {
  const checkIfPrime = (number) => {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  };

  let primeArray = [];
  let numberArray = Array.from({ length: num }, (v, k) => k + 1);
  numberArray.forEach((number) => {
    const isPrime = checkIfPrime(number);
    if (isPrime) {
      primeArray.push(number);
    }
  });
  return primeArray;
};

console.log(generatePrimeNumbers(100));
