function linearSearch1(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function linearSearch2(arr, value) {
  for (const item of arr) {
    if (item === value) {
      return arr.indexOf(item);
    }
  }
  return -1;
}

console.log(linearSearch1([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(linearSearch2([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

// Big O Notation for linear search is O(N). As the array size increases, the
// number of operations performed also increases.
// Linear search is good for unsorted arrays
