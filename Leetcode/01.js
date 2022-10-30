// leetcode 217 Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  let obj = {};

  for (let num of nums) {
    obj[num] ? (obj[num] += 1) : (obj[num] = 1);
  }

  for (key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;

  // solution 2
  // return nums.length !== new Set(nums).size;

  // solution 3
  // return new Set(nums).size < nums.length;
};
