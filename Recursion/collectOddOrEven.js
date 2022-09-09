// Write a function that takes in an array of numbers and returns all the odd number as another array
function collectOdd(array) {
  let result = [];
  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(array);
  return result;
}
console.log(collectOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function that takes in an array of numbers and returns all the even number as another array
function collectEven(array) {
  let result = [];
  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 === 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(array);
  return result;
}
console.log(collectEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
