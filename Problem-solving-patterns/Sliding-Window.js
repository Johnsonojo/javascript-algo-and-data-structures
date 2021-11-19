/**
 * This pattern involves creating a window which can either be an array or number
 * from one position to another. Depending on a certain condition, the window either
 * increases or closes (and a new window is created).
 * This pattern is very useful in keeping track of a subset of data in an array/string etc.
 */

/**
 * Example:
 * Write a function called maxSubArraySum which accepts an array of integer and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;
  // declare a maxSum variable
  let maxSum = 0;
  // declare a tempSum variable
  let tempSum = 0;

  // sum the first num element of the array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    //   slide the window by subtracting the first item and adding the next item
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubArraySum([], 4)); // null
