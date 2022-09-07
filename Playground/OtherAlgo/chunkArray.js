// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two dimensional array.
// Examples:
// chunk(["a", "b", "c", "d"], 2); // [["a", "b"],["c", "d"]],
// chunk([0, 1, 2, 3, 4, 5], 4); // [([0, 1, 2, 3], [4, 5])];

const chunk = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const lastSubarray = result[result.length - 1];
    if (!lastSubarray || lastSubarray.length === size) {
      result.push([item]);
    } else {
      lastSubarray.push(item);
    }
  }
  return result;
};

console.log(chunk(["a", "b", "c", "d"], 2)); // [["a", "b"],["c", "d"]],
console.log(chunk([0, 1, 2, 3, 4, 5], 4)); // [([0, 1, 2, 3], [4, 5])];
