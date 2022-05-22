// Selection Sort
// Space Complexity: O(1)
// Language: javascript
// Selection sort works
// Time Complexity:
// Best Case: O(n^2)
// worst Case: O(n^2)
// Average Case: O(n^2)

// Pseudocode
// 1. Start at the first element in the array
// 2. Find the smallest element in the array
// 3. Swap the first element with the smallest element
// 4. Continue to the next element and find the smallest element in the array
// 5. Swap the second element with the smallest element
// 6. Continue to the next element and repeat steps 2-5 until the array is sorted

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
      swap(arr, i, smallest);
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
