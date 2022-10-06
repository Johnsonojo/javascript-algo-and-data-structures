function rotateSortedArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
  return array;
}

console.log(rotateSortedArray([0, 1, 2, 4, 5, 6, 7]));
let array = [2, 2, 2, 0, 1];
array = [...new Set(array)];
console.log("array", array);

var findMin = function (nums) {
  nums = [...new Set(nums)];

  let mini = nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] < mini) mini = nums[middle];

    if (nums[middle] >= nums[right]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return mini;
};
