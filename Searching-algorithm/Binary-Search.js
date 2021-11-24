/**
 * Binary search only works on sorted arrays.It is a much faster form of search.Rather than
 * eliminating one element at a time, you can eliminate half of the remaining elements at a time.
 *
 * Big O notation is:
 * O(log n) for worst and average cases.
 * O(1) for best case.
 */

function binarySearch(arr, value) {
  // arr = arr.sort();
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== value && left <= right) {
    if (value > arr[middle]) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
