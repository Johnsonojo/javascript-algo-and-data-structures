// Insertion Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Language: javascript
// It builds up the sort by gradually creating a larger left half of the array
// which is always sorted

// Pseudocode
// 1. Start at the second element in the array
// 2. Compare the second element to the one before it
// 3. If the second element is less than the one before it, swap them
// 4. Continue to the next element and if it's less than the one before it, swap them
// 5. Repeat step 2 and 3 until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([02, 1, 9, 76, 4]));
