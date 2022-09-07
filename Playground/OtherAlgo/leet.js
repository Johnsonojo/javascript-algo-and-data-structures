// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
const findMedianSortedArrays = (nums1, nums2) => {
  // sort the merged array
  sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let median;
  // declare left and right pointers
  let left = 0;
  let right = sortedArray.length - 1;
  // calculate the middle using the left and right pointers
  if (sortedArray.length % 2 !== 0) {
    medianIndex = (left + right) / 2;
    median = sortedArray[medianIndex];
  } else {
    let firstMiddleIndex = Math.floor((left + right) / 2);
    let secondMiddleIndex = firstMiddleIndex + 1;
    median =
      (sortedArray[firstMiddleIndex] + sortedArray[secondMiddleIndex]) / 2;
  }
  return median;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
const findDuplicate = (nums) => {
  // declare an empty object
  let frequencies = {};
  // loop over the array and populate the object
  for (const item of nums) {
    // frequencies[item] = ++frequencies[item] || 1;
    frequencies[item] ? (frequencies[item] += 1) : (frequencies[item] = 1);
  }
  // return the key where value is 1
  for (const key in frequencies) {
    if (frequencies[key] > 1) {
      return key;
    }
  }
  // OR
  // const newSet = new Set();
  // for (const item of nums) {
  //   if (newSet.has(item)) {
  //     return item;
  //   } else {
  //     newSet.add(item);
  //   }
  // }
  // return -1;
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// const findDuplicate = (nums) => {};

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.
const sumOfUniques = (nums) => {
  let frequencies = {};
  let sum = 0;
  for (const item of nums) {
    frequencies[item] ? (frequencies[item] += 1) : (frequencies[item] = 1);
  }
  for (const key in frequencies) {
    if (frequencies[key] === 1) {
      sum += parseInt(key);
    }
  }
  return sum;
};
console.log(sumOfUniques([1, 2, 3, 1, 2, 3]));
console.log(sumOfUniques([1, 2, 3, 1, 2, 3, 4]));
console.log(sumOfUniques([1, 2, 3, 4, 5]));

const twoOutOfThree = (nums1, nums2, nums3) => {
  // get all unique elements in each array and combine them
  combinedArr = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];

  // create an object to store the frequencies
  let freq = {};

  // Populate the object
  for (const item of combinedArr) {
    freq[item] ? (freq[item] += 1) : (freq[item] = 1);
  }
  // get the items that occurred more than once
  const result = Object.keys(freq)
    .filter((num) => freq[num] > 1)
    .map((num) => parseInt(num));

  return result;
};
console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));

const plusOne = (digits) => {
  let num = BigInt(digits.join("")) + BigInt(1);
  let numArray = String(num).split("");
  return numArray;
};

console.log(plusOne([9])); // [1,0]
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("This is the day that the lord has made"));
console.log(capitalize("i'm a little tea pot"));
