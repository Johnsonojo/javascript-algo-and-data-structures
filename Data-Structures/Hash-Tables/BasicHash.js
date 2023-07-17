// Naive Hash Function
const hash = (key, arrLength) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLength;
  }
  return total;
};

console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7
console.log(hash("cyan", 10)); // 3

// Slightly Better Hash Function
const hashTwo = (key, arrLength) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrLength;
  }
  return total;
};

console.log(hashTwo("pink", 10)); // 0
console.log(hashTwo("orangered", 10)); // 7
console.log(hashTwo("cyan", 10)); // 3
