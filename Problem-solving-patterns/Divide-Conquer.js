/**
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with
 * a subset of data. The pattern can tremendously decrease time complexity.
 *
 * Example:
 * Given a sorted array of integers, write a function called search that accepts a value and returns
 * the index where the value passed to the function is located. If the value id not found, return -1.
 */

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);

    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1


