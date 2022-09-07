// // Write a function:

// // function solution(A);

// // that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// // For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let sorted = A.sort((a, b) => a - b);
//   let smallestPositive = 1;
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === smallestPositive) {
//       smallestPositive++;
//     }
//   }
//   return smallestPositive;
// }

// console.log(solution([1, 3, 6, 4, 1, 2]));

// convert integers to binary
// function toBinary(num) {
//   return Number((num >>> 0).toString(2));
// }

// console.log(toBinary(5));

// function binarySearch(arr, val) {
//   let arrayPath = [];
//   let min = 0;
//   let max = arr.length - 1;

//   let middle = Math.floor((min + max) / 2);
//   console.log("middle :>> ", middle);
//   while (min <= max) {
//     if (val > arr[middle]) {
//       min = middle + 1;
//       console.log("min", min);
//       arrayPath.push(middle + 1);
//     } else if (val < arr[middle]) {
//       max = middle - 1;
//       arrayPath.push(middle - 1);
//     } else {
//       arrayPath.push(middle);
//     }
//     console.log("arrayPath", arrayPath);
//     return arrayPath;
//   }
// }

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);

// while a user is downloading a file which is X bytes in size,
// your job is to provide a function to estimate the time remaining in minutes.
// The system has a record of the amount (in bytes) B downloaded each minute.
//  if the file is not completely downloaded, estimate the rate by taking simple average
//  of the last Z operations.

// write a function:
// function solution(X, B, Z);

function solution(X, B, Z) {
  let time = 0;
  let avg = 0;
  let avgArray = [];
  if (B < X) {
    avgArray.push(B);
    if (avgArray.length > Z) {
      avgArray.shift();
    }
    avg = avgArray.reduce((a, b) => a + b) / avgArray.length;
    time = Math.ceil((X - B) / avg);
  } else if (B === X) {
    time = 0;
  }
  return time;
}

console.log(solution(100, [10, 6, 6, 8], 2));
