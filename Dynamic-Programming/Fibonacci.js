/**
 * Write a function `fib(n)` that takes a number as an argument.
 * The function should return the n-th number of the Fibonacci sequence
 *
 * Time Complexity for non-memoized version is O(2^n)
 * Space Complexity for non-memoized version is O(n)
 *
 * Time Complexity for memoized version is O(n)
 * Space Complexity for memoized version is O(n)
 */

//  non-memoized version
// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

//  non-memoized version
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
