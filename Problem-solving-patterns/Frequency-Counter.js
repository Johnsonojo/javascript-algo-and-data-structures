/**
 * Frequency Counter
 * Multiple Pointers
 * Sliding Window
 * Divide and Conquer
 * Dynamic Programming
 * Greedy Algorithms
 * Backtracking
 */

// Frequency Counter uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays or strings

/**
 * Example
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value
 * squared in the second array. The frequency of values must be the same.
 */

// declare the function
const same = (array1, array2) => {
  // check if both arrays are equal in length
  if (array1.length !== array2.length) return false;

  // declare tow objects to store the frequency of values in both arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop over the first array and store the frequency of values in the first frequency counter
  for (const item of array1) {
    frequencyCounter1[item] = ++frequencyCounter1[item] || 1;
  }
  // loop over the second array and store the frequency of values in the second frequency counter
  for (const item of array2) {
    frequencyCounter2[item] = ++frequencyCounter2[item] || 1;
  }
  // if key of frequencyCounter1 is in double that in frequencyCounter2, return false
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // else return true
  return true;
};

// Uncomment the console logs to test
// console.log(same([1, 2, 3], [4, 1, 9])); // true`
// console.log(same([1, 2, 3], [1, 9])); // false`
// console.log(same([1, 2, 1], [4, 4, 9])); // false`

// Anagrams Example
/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word or phrase, or name formed by rearranging the letters of another.
 * Example: cinema can be formed from iceman
 */

// declare the function
const isValidAnagram = (str1, str2) => {
  // check if both strings have same length and return false if not
  if (str1.length !== str2.length) return false;
  // create two objects to store the frequency of values in both strings
  let str1Counter = {};
  let str2Counter = {};
  // loop over the first string and store the frequency of values in the first counter
  for (const item of str1) {
    str1Counter[item] = ++str1Counter[item] || 1;
  }
  // loop over the first string and store the frequency of values in the first counter
  for (const item of str2) {
    str2Counter[item] = ++str2Counter[item] || 1;
  }
  // if the key in the first string doesn't occur the exact number of times in the second string, return false
  for (const key in str1Counter) {
    if (!(key in str2Counter)) {
      return false;
    }
    if (str2Counter[key] !== str1Counter[key]) {
      return false;
    }
  }
  // else return true
  return true;
};

// OR
const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!counter[letter]) {
      return false;
    } else {
      counter[letter] -= 1;
    }
  }
  return true;
};
// Uncomment this console logs to test
// console.log(isValidAnagram("", "")); //true
// console.log(isValidAnagram("aaz", "zza")); //false
// console.log(isValidAnagram("anagram", "nagaram")); //true
// console.log(isValidAnagram("rat", "car")); //false
// console.log(isValidAnagram("awesome", "awesom")); //false
// console.log(isValidAnagram("qwerty", "qeywrt")); //true
// console.log(isValidAnagram("texttwisttime", "timetwisttext")); //true
// console.log(isValidAnagram("cinema", "iceman")); //true
