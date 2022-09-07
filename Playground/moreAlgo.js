// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: valid

function isValid(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      if (stack.length === 0) return false;
      if (stack.pop() !== map[s[i]]) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));

const calPoints = (ops) => {
  let finalArrayToSum = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      finalArrayToSum.pop();
    } else if (ops[i] === "D") {
      finalArrayToSum.push(finalArrayToSum[finalArrayToSum.length - 1] * 2);
    } else if (ops[i] === "+") {
      finalArrayToSum.push(
        finalArrayToSum[finalArrayToSum.length - 1] +
          finalArrayToSum[finalArrayToSum.length - 2]
      );
    } else {
      finalArrayToSum.push(parseInt(ops[i]));
    }
  }
  return finalArrayToSum.reduce((a, b) => a + b);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));

// A digit-only keyboard
// write a function that calculates the number of milliseconds needed to type a number with one finger
const numberGenerator = (digits, num) => {
  let number = num.toString();
  let milliseconds = 0;
  for (let i = 0; i < number.length; i++) {
    milliseconds += digits[number[i]];
  }
  return milliseconds;
};

console.log(numberGenerator(["0123456789"], "210"));

// suppose you're given a set which originally contains numbers from 1 to n. Unfortunately
// due to a data error, one of the numbers in the set got duplicated to another number in the set,
// whuch results in a repetition of one number and the loss of another number
// given an array nums representing the data status of the set aster the error
// find and return the number that occurs twice that is missing in the form of an array
const findErrorNums = (nums) => {
  let hash = {};
  let missing = [];
  let duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      duplicate.push(nums[i]);
    } else {
      hash[nums[i]] = true;
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!hash[i]) {
      missing.push(i);
    }
  }
  return [duplicate[0], missing[0]];
};

console.log(findErrorNums([1, 2, 3, 4, 3]));
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 2, 2]));

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
var searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
console.log(searchInsert([1, 3, 5, 6], 7));

// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non - decreasing order.If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order.
// var targetIndices = function (nums, target) {};
// console.log(targetIndices([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
var missingNumber = function (nums) {
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }
  // return (nums.length * (nums.length + 1)) / 2 - sum;

  nums = nums.sort((a, b) => a - b);
  let sum = 0;
  let idealSum = ((nums.length + 1) / 2) * (nums[0] + nums[nums.length - 1]);

  for (j = 0; j < nums.length; j++) {
    sum += nums[j];
  }
  return idealSum - sum;
};
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
