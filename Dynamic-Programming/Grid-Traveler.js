// Say that you are a traveler on a 2D grid. You begin in the top left corner and
// your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on the grid with dimensions m * n?
// Write a function `gridTraveler(m,n)` that calculates this.
// Where m is the number of rows and n is the number of columns

// Non-memoized version
// Time Complexity: O(2^(m+n))
// Space Complexity: O(m+n)

// function gridTraveler(m, n) {
//   if (m === 0 || n === 0) return 0;
//   if (m === 1 && n === 1) return 1;
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }

// memoized version
// Time Complexity: O(m*n)
// Space Complexity: O(m+n)
function gridTraveler(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}
console.log(gridTraveler(200, 200));
