// const same = (array1, array2) => {
//   if (array1.length !== array2.length) return false;
//   // create an object to hold the frequency of each item in both arrays

//   let freq1 = {};
//   let freq2 = {};

//   for (const item of array1) {
//     freq1[item] ? (freq1[item] += 1) : (freq1[item] = 1);
//   }

//   for (const item of array2) {
//     freq2[item] ? (freq2[item] += 1) : (freq2[item] = 1);
//   }
//   console.log("freq1", freq1); // freq1 { '1': 2, '2': 1 }
//   console.log("freq2", freq2); // freq2 { '1': 2, '4': 1 }

//   for (const key in freq1) {
//     if (!(key ** 2 in freq2)) {
//       return false;
//     }
//     if (freq2[key ** 2] !== freq1[key]) {
//       return false;
//     }
//   }
//   // else return true
//   return true;
// };

// console.log(same([1, 2, 1], [4, 1, 1]));

// // Anagrams Example
// /**
//  * Given two strings, write a function to determine if the second string is an anagram of the first.
//  * An anagram is a word or phrase, or name formed by rearranging the letters of another.
//  * Example: cinema can be formed from iceman
//  */

// const isValidAnagram = (str1, str2) => {
//   str1 = str1.trim();
//   str2 = str2.trim();
//   // check if the length of the string are equal
//   if (str1.length !== str2.length) return false;
//   // if the strings are equal in length, create 2 objects to store the frequency of values in both strings
//   let freq1 = {};
//   let freq2 = {};
//   // loop over each string and populate their respective objects
//   for (const item of str1) {
//     freq1[item] ? (freq1[item] += 1) : (freq1[item] = 1);
//   }

//   for (const item of str2) {
//     freq2[item] ? (freq2[item] += 1) : (freq2[item] = 1);
//   }

//   // loop over the first object and check if the key is in the second object and return false if it isn't
//   for (const key in freq1) {
//     if (!(freq2[key] === freq1[key])) {
//       return false;
//     }
//     if (!key in freq2) {
//       return false;
//     }
//   }
//   // else return true
//   return true;
// };

// console.log(isValidAnagram("cinema", "iceman"));

// function repeatedNumber(A) {
//   // declare a variable and initialize it as an empty object
//   let freq = {};

//   // loop over the array and populate the empty object
//   for (const item of A) {
//     freq[item] ? (freq[item] += 1) : (freq[item] = 1);
//   }
//   // loop over the object and check if the any key is greater than 1
//   for (let key in freq) {
//     if (freq[key] > 1) {
//       return key;
//     }
//   }
//   return -1;
// }

// console.log(
//   repeatedNumber([
//     247, 240, 303, 9, 304, 105, 44, 204, 291, 26, 242, 242, 2, 358, 264, 176,
//     289, 196,
//   ])
// );

// // write a function that takes in an array of numbers and returns any number with duplicates.

// function isPalindrome(A) {
//   console.log(Number(A.toString().split("").reverse().join("")) === A);
//   return (A = Number(A.toString().split("").reverse().join("")) ? 1 : 0);
// }

// // isPalindrome(121);
// console.log(isPalindrome(123));

const checkIfPrime = (number) => {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(checkIfPrime(13));
