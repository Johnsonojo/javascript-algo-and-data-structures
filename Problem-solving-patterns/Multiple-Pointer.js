/**
 * Multiple pointers involves creating pointers or values that correspond to an index or position and
 * move towards the beginning, end or middle based on a certain condition.
 * It is very efficient for solving problems with minimal space complexity as well.
 */

/**
 * Example:
 * Write a function called sumZero which accepts a sorted array of integers. The function should find
 * the first pair where the sum is zero. Return an array that includes both values that sum to zero
 * or undefined if a pair does not exist.
 */

// declare the function
const sumZero = (sortedArray) => {
  // create variables for the pointers
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    let sum = sortedArray[leftPointer] + sortedArray[rightPointer];
    // if the sum of both pointers is zero, then return both pointers in an array
    if (sum === 0) {
      return [sortedArray[leftPointer], sortedArray[rightPointer]];
    }
    // if the sum of both pointers is greater than zero, move the right backwards
    else if (sum > 0) {
      rightPointer--;
    }
    // if the sum of both pointers is a less than zero, move the left forwards
    else {
      leftPointer++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); //undefined

/**
 * Example:
 * Write a function called countUniqueValues, which accepts a sorted array of integers.
 * The function should count the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */

// declare the function

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log("arr", arr);
  }
  clear;
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 3])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([-3, -2, -1, 0, 1, 2, 3])); // 7
