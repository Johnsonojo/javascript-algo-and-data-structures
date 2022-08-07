// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value.
// If there is such a triplet present in array, then print the triplet.

// function findTriplet(arr, sum) {
//   let triplet = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === sum) {
//           triplet = [arr[i], arr[j], arr[k]];
//           return triplet;
//         }
//       }
//     }
//   }
//   return triplet;
// }

function findTriplet(arr, sum) {
  // optimize the time complexity
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === sum) {
        return [arr[i], arr[left], arr[right]];
      } else if (currentSum < sum) {
        left++;
      } else {
        right--;
      }
    }
  }

  //   return triplet;
}

console.log(findTriplet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));
