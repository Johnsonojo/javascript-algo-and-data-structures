function getDigit(num, i) {
  let theNumber = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return theNumber;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
}

// function radixSort(num) {
//   let maxDigitsCOunt = mostDigits(num);
//   for (let k = 0; k < maxDigitsCOunt; k++) {
//     let digitBuckets = Array.from({ length: 10 }, () => []);
//     for (let i = 0; i < num.length; i++) {
//       let digit = getDigit(num[i], k);
//       digitBuckets[digit].push(num[i]);
//     }
//     num = [].concat(...digitBuckets);
//   }
//   return num;
// }
function radixSort(arr) {
  let maxLength = 1;
  for (let i = 0; i < arr.length; i++) {
    if (maxLength < getDigit(arr[i], 0)) {
      maxLength = getDigit(arr[i], 0);
    }
  }
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
// console.log(getDigit(123456, 0));
// console.log(Math.pow(10, 0));

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
