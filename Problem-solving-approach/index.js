// Problem Solving Approaches
// A. Understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs?
// 5. How should I label the important pieces of data that are a part of the problem?

// B. Explore concrete examples
// Coming up with examples can help you understand the problem better
// Examples als provide sanity checks that your eventual solution works how it should.
// 1. start with simple examples
// 2. Progress to more complex examples
// 3. Explore examples with empty inputs
// 4. Explore examples with invalid inputs

// C. Break it down
/** Explicitly write the steps you need to take. THis forces you to think about the code you'll write.
 * before you write it, and helps you catch any lingering conceptual issues or misunderstandings before
 * you dive in and have to worry about details (e.g. language syntax).
 */

// D. Solve/Simplify the problem
// E. Look back and refactor

/**
 * **************************Example**************************
 * Write a function that takes in a string and returns counts of each character in the string.
 */

// function charCount(str) {
//   const result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-zA-Z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// function charCount(str) {
//   const result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-zA-Z0-9]/.test(char)) {
//       result[char] > 0 ? result[char]++ : (result[char] = 1);
//     }
//   }
//   return result;
// }

// function charCount(str) {
//   const result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-zA-Z0-9]/.test(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

const charCount = (str) => {
  const result = {};

  const isAlphanumeric = (char) => {
    let code = char.charCodeAt(0);

    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      return false;
    } else {
      return true;
    }
  };

  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
};

console.log(charCount("Software developer @ works from home"));
//  {
//   s: 2,
//   o: 5,
//   f: 2,
//   t: 1,
//   w: 2,
//   a: 1,
//   r: 4,
//   e: 5,
//   d: 1,
//   v: 1,
//   l: 1,
//   p: 1,
//   k: 1,
//   m: 2,
//   h: 1,
// };
