// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let result = 1;
  if (arr.length === 0) {
    return 1;
  }
  result *= arr[0] * productOfArray([...arr].splice(1));
  return result;
}
