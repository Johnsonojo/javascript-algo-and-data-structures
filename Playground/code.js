// QUESTION 1
// while a user is downloading a file which is X bytes in size,
// your job is to provide a function to estimate the time remaining in minutes.
// The system has a record of the amount (in bytes) B downloaded each minute.
// if the file is not completely downloaded, estimate the rate by taking simple average
// of the last Z operations.

// write a function:
// function solution(X, B, Z);

// const estimateTime = (X, B, Z) => {
//   let time = 0;
//   let remainder = X;
//   for (let i = 0; i < B.length; i++) {
//     if (remainder > 0) {
//       remainder -= B[i];
//       time++;
//     }
//   }
//   if (remainder > 0) {
//     let average = 0;
//     let count = 0;
//     for (let i = B.length - 1; i >= 0; i--) {
//       if (count < Z) {
//         average += B[i];
//         count++;
//       } else {
//         break;
//       }
//     }
//     average = average / count;
//     return Math.ceil(remainder / average);
//   }
//   return time;
// };

// console.log(estimateTime(100, [10, 6, 6, 8], 2));
// console.log(estimateTime(10, [2, 3], 2));

// QUESTION 2
// from an integer X representing a time duration in seconds,
// produce a simplified string representation.
// for example, given X=100, you should output "1m40s".
// Use the following abbreviations w, d, h, m, s for weeks, days, hours, minutes and seconds respectively.
// 1w is 1 weeks
// 1d is 1 day
// 1h is 1 hour
// 1m is 1 minute
// 1s is 1 second

// Only the two largest non-zero units should be used.
// Round up the second unit if necessary so that the output only
// has two units even though this might mean the output represents slightly more than X seconds.
// Examples:
// 1. Given X=100, you should output "1m40s".
// 2. Given X=7263, you should output "2h2m".
// 3. Given X=0, you should output "0s".
// 4. Given X=3605, you should output "1h5s".

const simplified = (X) => {
  let seconds = X % 60;
  let minutes = Math.floor(X / 60) % 60;
  let hours = Math.floor(X / 3600) % 24;
  let days = Math.floor(X / 86400) % 7;
  let weeks = Math.floor(X / 604800);
  let time = [];
  if (weeks) {
    time.push(`${weeks}w`);
  }
  if (days) {
    time.push(`${days}d`);
  }
  if (hours) {
    time.push(`${hours}h`);
  }
  if (minutes) {
    time.push(`${minutes}m`);
  }
  if (seconds) {
    time.push(`${seconds}s`);
  }

  if (time.length > 2) {
    //   remove the last element and add one to the second to last unit
    time[time.length - 2] = `${parseInt(time[time.length - 2]) + 1}${
      time[time.length - 2][time[time.length - 2].length - 1]
    }`;
    time.pop();
  }
  return time.join("");
};

console.log(simplified(100));
console.log(simplified(7263));
console.log(simplified(3605));

// QUESTION 3
// An internal unit of company XYZ provides services to other departments.
// Service prices are fixed at the beginning of the quarter based on projected expenses and utilization.
// However, usage is billed at the end of the quarter.
// So while composing quarterly invoices there may be an excess.
// We suppose planning is very good, so there is only ever a modest overage.
// This amount should be returned to the departments by discounting a portion of it on each invoice.

// Your job is to write a function which considers the excess S and allocates it fairly.
// Allocation proceeds from the largest to the smallest invoice.
// And is distributed as the ratio of the invoice's contribution to the sum of itself and those which follow.
// Example 1:
// Given S="300.01" and B=["300.00","200.00","100.00"].
// R[0] = "150.00" (=300.01 * 300.00/600.00)
// R[1] = "100.00" (=150.01 * 200.00/300.00)
// R[2] = "50.01"  (=50.01 * 100.00/100.00)

// Example 2:
// (Pay careful attention to this one)
// Given S="1.00" and B=["0.05","1.00"].
// 1. First we consider 1.00 because it is the largest,
// a. 1.00 * 1.00 / 1.05 ~= 0.95238...
// b. Round 0.95238... to "0.95".
// Rounding down to carry pennies to smaller departments.

const allocate = (S, B) => {
  let total = 0;
  let allocatedSharing = [];

  for (let i = 0; i < B.length; i++) {
    total += parseFloat(B[i]);
  }
  for (let i = 0; i < B.length; i++) {
    let value = (parseFloat(S) * parseFloat(B[i])) / total;
    allocatedSharing.push(value.toFixed(2));
  }
  return allocatedSharing;
};

console.log(allocate("300.01", ["300.00", "200.00", "100.00"]));
console.log(allocate("1.00", ["0.05", "1.00"]));
