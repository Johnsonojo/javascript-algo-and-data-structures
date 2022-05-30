// Quick Sort
// Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
// Time Complexity:
// Best Case: O(n log n)
// Average Case: O(n log n)
// Worst Case: O(n^2)
// Space Complexity: O(log n)

// Psudo Code
// 1. Pick the first element of the array as pivot
// 2. Partition the array around the pivot such that all elements smaller than the pivot are to its left and all elements greater than the pivot are to its right
// 3. Recursively sort the sub-array to the left of the pivot and to the right of the pivot
// 4. Return the sorted array

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (arr.length <= 1) return arr;

  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([28, 16, 49, 38, 65, -10, -89, 97, 26, 35, 12]));
