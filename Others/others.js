// Write a function that accepts an array of integers ar and a positive integer k, and determines
//  the number of (i,j) pairs where i<j and arr[i] + arr[j is divisible by k.
// Example
// arr =[1,2,3,4,5,6]
// k =5
// Three pairs meet the criteria: [1,4],[2,3] and [4,6]. Hence, the final answer is 3.

// declare the function
function divisibleSumPair(n, k, ar) {
  // sort the array

  ar = ar.sort();
  let pairsArray = [];
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairsArray.push([ar[i], ar[j]]);
        result += 1;
      }
    }
  }
  console.log(pairsArray);
  return result;
  // else move each pointer a step forward
  // return the length of the final result array
}

console.log(divisibleSumPair(5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPair(3, [1, 3, 2, 6, 1, 2]));

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3