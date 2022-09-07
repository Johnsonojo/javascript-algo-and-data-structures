// // finding differences in array values with different use cases

// function findDiff(a, b) {
//   let diff = [];
//   let aSet = new Set(a);
//   let bSet = new Set(b);
//   console.log("aSet", aSet);
//   console.log("bSet", bSet);
//   for (let i = 0; i < a.length; i++) {
//     if (!bSet.has(a[i])) {
//       diff.push(a[i]);
//     }
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (!aSet.has(b[i])) {
//       diff.push(b[i]);
//     }
//   }
//   return diff;
// }

// console.log(findDiff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(findDiff([1, 2, 3, 4, 5], [6, 7, 8, 9]));
// console.log(findDiff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

// A palindrome checker that takes a string s and array of values. based on array of values and some conditions , create a palindrome and check values
// function palindrome(str, arr) {
//   let array = str.split("");
//   let i = 0;
//   let j = array.length - 1;
//   let count = 0;
//   while (i < j) {
//     if (array[i] === array[j]) {
//       i++;
//       j--;
//     } else {
//       if (count < arr.length) {
//         let temp = array[i];
//         array[i] = arr[count];
//         if (array.join("") === array.reverse().join("")) {
//           return array.join("");
//         } else {
//           array[i] = temp;
//           array[j] = arr[count];
//           if (array.join("") === array.reverse().join("")) {
//             return array.join("");
//           } else {
//             count++;
//             i = 0;
//             j = array.length - 1;
//           }
//         }
//       } else {
//         return 0;
//       }
//     }
//   }
//   return array.join("");
// }
// console.log(palindrome("abba", ["a", "b", "c", "d"])); // abba
// console.log(palindrome("abba", ["a", "c", "b", "d"])); // abba
// console.log(palindrome("abba", ["a", "c", "d", "b"])); // abba
// console.log(palindrome("abba", ["a", "d", "c", "b"])); // abba
// console.log(palindrome("abba", ["a", "d", "b", "c"])); // abba
// console.log(palindrome("abba", ["a", "b", "d", "c"])); // abba
// console.log(palindrome("abcba", ["a", "b", "c", "d"])); // abcdcba
// console.log(palindrome("abcba", ["a", "c", "b", "d"])); // abcdcba
// console.log(palindrome("abcba", ["a", "c", "d", "b"])); // abcdcba
// console.log(palindrome("abcba", ["a", "d", "c", "b"])); // abcdcba
// console.log(palindrome("abcba", ["a", "d", "b", "c"])); // abcdcba

// function palindrome2(str, arr) {
//   let reversed = str.split("").reverse().join("");
//   let palindrome = str + reversed;
//   let palindromeArr = palindrome.split("");
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === palindromeArr[i]) {
//       count++;
//     }
//   }
//   if (count === arr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97])); // true
// console.log(palindrome("abc", [97, 98, 99, 100, 98, 97])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98])); // false
// console.log(palindrome("abc", [97, 98, 99, 98, 97])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99])); // false
// console.log(palindrome("abc", [97, 98, 99, 100, 98, 97, 98, 99])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99, 100])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99, 100, 98])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99, 100, 98, 97])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99, 100, 98, 97, 98])); // false
// console.log(palindrome("abc", [97, 98, 99, 99, 98, 97, 98, 99

// compute points (x1, X2, y1, y2, z1,z2) of a triangle to find whether it is a non-degenerate triangle( this is first time I am hearing that).
// and also check if a point P(p1,p2 ) exist inside the triangle.
// if it is a non-degenerate triangle, find the area of the triangle.
// if the point P exist inside the triangle, find the area of the triangle formed by the point P and the triangle.
// if the point P does not exist inside the triangle, find the area of the triangle formed by the point P and the triangle.
function computePoints(x1, x2, y1, y2, z1, z2, p1, p2) {
  let area = Math.abs((x1 * (y2 - z2) + y1 * (z2 - x2) + z1 * (x2 - y2)) / 2);
  let area1 = Math.abs((x1 * (y2 - p2) + y1 * (p2 - x2) + p1 * (x2 - y2)) / 2);
  let area2 = Math.abs((x1 * (p2 - z2) + p1 * (z2 - x2) + z1 * (x2 - p2)) / 2);
  let area3 = Math.abs((p1 * (y2 - z2) + y1 * (z2 - p2) + z1 * (p2 - y2)) / 2);
  let area4 = area1 + area2 + area3;
  let area5 = area - area4;
  if (area === 0) {
    return "Non-degenerate triangle";
  } else if (area4 === area) {
    return "Point P exist inside the triangle";
  } else if (area5 === area) {
    return "Point P does not exist inside the triangle";
  }
}
console.log(computePoints(0, 0, 0, 1, 1, 0, 0.5, 0.5)); // Point P exist inside the triangle
// console.log();
