/**
 * Binary search only works on sorted arrays.It is a much faster form of search.Rather than
 * eliminating one element at a time, you can eliminate half of the remaining elements at a time.
 *
 * Big O notation is:
 * O(log n) for worst and average cases.
 * O(1) for best case.
 *
 * how it is O(log n)
 * For an array with say 16 sorted items, in worst case it will take 4 steps
 * to locate the particular item you're looking for.
 * steps includes
 * 1. find the start, middle and end index of the array
 * 2. while the middle item is not the value being sort after and the
 *    start index is less than the end index,
 * 3. loop through the array
 * 4. if the value at the middle index is greater than the value,
 *    set the start to be equal to middle index + 1
 * 5. else the end index is equal to middle index - 1
 * For example, let's look for 8 in the array below.
 * 8 would be found in the first loop
 *  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 *  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 *
 *
 *
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
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
