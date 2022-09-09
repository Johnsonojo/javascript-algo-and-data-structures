// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true

function sameFrequency(digit1, digit2) {
  //create two empty objects to store the frequencies of digits
  let digit1Freq = {};
  let digit2Freq = {};
  // convert the digits to strings
  let digit1Str = digit1.toString();
  let digit2Str = digit2.toString();

  if (digit1Str.length !== digit2Str.length) return false;

  // loop over the strings and populate the respective object
  for (let i = 0; i < digit1Str.length; i++) {
    let char = digit1Str[i];
    digit1Freq[char] ? (digit1Freq[char] += 1) : (digit1Freq[char] = 1);
  }

  for (let i = 0; i < digit2Str.length; i++) {
    let char = digit2Str[i];
    digit2Freq[char] ? (digit2Freq[char] += 1) : (digit2Freq[char] = 1);
  }

  // check if the keys  and values are equal in occurrence
  for (const key in digit1Freq) {
    if (!digit2Freq[key]) {
      return false;
    }
    if (digit1Freq[key] !== digit2Freq[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true

const checkValid = (matrix) => {
  // flatten the array into a single array
  let newArray = matrix.flat();
  //   console.log(newArray);
  // initialize an empty object
  let frequency = {};
  // loop over the array and collect the frequencies of the items
  for (const item of newArray) {
    frequency[item] ? (frequency[item] += 1) : (frequency[item] = 1);
  }
  console.log("frequency :>> ", frequency);
  // check if the value of each key is equal to the length of the matrix
  for (const key in frequency) {
    if (frequency[key] !== matrix.length) {
      return false;
    }
  }
  return true;
};

// console.log(
//   checkValid([
//     [1, 2, 3],
//     [3, 1, 2],
//     [2, 3, 1],
//   ])
// );

// console.log(
//   checkValid([
//     [1, 1, 1],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
// );

console.log(
  checkValid([
    [15, 7, 18, 11, 19, 10, 14, 16, 8, 2, 3, 6, 5, 1, 17, 12, 9, 4, 13],
    [17, 15, 9, 8, 11, 13, 7, 6, 5, 1, 3, 16, 12, 19, 10, 2, 4, 14, 18],
    [19, 14, 12, 10, 8, 9, 17, 16, 4, 3, 13, 18, 1, 5, 7, 11, 2, 15, 6],
    [4, 2, 10, 15, 19, 16, 8, 9, 5, 3, 1, 11, 13, 14, 6, 18, 12, 17, 7],
    [13, 19, 9, 16, 5, 8, 6, 12, 14, 11, 18, 10, 7, 2, 3, 4, 15, 17, 1],
    [4, 7, 18, 11, 17, 16, 5, 12, 10, 1, 15, 13, 14, 6, 19, 2, 3, 9, 8],
    [14, 5, 15, 1, 18, 6, 12, 7, 8, 9, 3, 13, 2, 10, 19, 4, 11, 16, 17],
    [10, 3, 1, 8, 14, 19, 11, 18, 15, 13, 9, 12, 16, 17, 7, 4, 5, 2, 6],
    [14, 13, 19, 18, 7, 2, 4, 8, 10, 17, 12, 5, 15, 1, 6, 9, 11, 3, 16],
    [19, 8, 10, 18, 16, 12, 11, 17, 4, 9, 7, 2, 5, 13, 15, 3, 6, 1, 14],
    [1, 10, 6, 14, 7, 18, 3, 9, 4, 16, 5, 11, 13, 17, 15, 8, 19, 2, 12],
    [13, 10, 5, 16, 1, 19, 17, 3, 9, 11, 7, 8, 12, 6, 4, 2, 14, 15, 18],
    [17, 2, 1, 6, 9, 19, 18, 14, 4, 11, 12, 13, 16, 5, 8, 7, 3, 10, 15],
    [1, 4, 10, 5, 13, 6, 18, 11, 3, 2, 15, 14, 16, 12, 17, 19, 8, 9, 7],
    [2, 14, 3, 12, 16, 17, 11, 9, 1, 6, 5, 19, 10, 13, 4, 18, 7, 15, 8],
    [15, 9, 8, 18, 14, 13, 4, 12, 5, 17, 6, 1, 11, 16, 19, 3, 7, 2, 10],
    [15, 8, 12, 16, 13, 2, 6, 19, 18, 14, 10, 5, 11, 9, 7, 1, 3, 17, 4],
    [15, 6, 17, 7, 5, 3, 1, 9, 19, 12, 10, 11, 16, 14, 18, 8, 2, 13, 4],
    [6, 11, 10, 14, 2, 13, 16, 1, 9, 15, 8, 19, 17, 3, 5, 18, 7, 4, 12],
  ])
);
