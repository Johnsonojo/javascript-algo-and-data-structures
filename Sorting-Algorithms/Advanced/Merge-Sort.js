// Merge Sort
// Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
// Time Complexity:
// Best Case: O(n log n)
// Average Case: O(n log n)
// Worst Case: O(n log n)
// Space Complexity: O(n)

// Pseudocode
// 1. Divide the unsorted array into n sub-arrays of size 1
// 2. Repeatedly merge sub-arrays to produce new sorted sub-arrays until there is only 1 sub-array remaining
// 3. Return the sorted sub-array

// const mergeIt = (leftArr, rightArr) => {
//   let result = [],
//     leftIndex = 0,
//     rightIndex = 0;
//   while (
//     leftIndex < leftArr.length &&
//     rightIndex < rightArr.length
//   ) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       result.push(leftArr[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(rightArr[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return result
//     .concat(leftArr.slice(leftIndex))
//     .concat(rightArr.slice(rightIndex));
// };

const mergeIt = (leftArr, rightArr) => {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return result;
};

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  // get the midpoint of the array
  let mid = Math.floor(arr.length / 2);
  // split the array into two halves
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // merge the two halves and return the result
  return mergeIt(left, right);
}
// console.log(mergeIt([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
