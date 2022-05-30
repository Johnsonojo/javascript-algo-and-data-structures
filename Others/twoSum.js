function twoSum(arr, target) {
  if (arr.length === 1) return [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] !== target) {
        j++;
      }
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
