function findMax(nums) {
  let maxNum = Number.NEGATIVE_INFINITY;
  for (const num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
