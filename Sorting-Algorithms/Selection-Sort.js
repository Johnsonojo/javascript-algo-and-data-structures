// Selection Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Language: javascript
// Selection sort works
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      swap(arr, i, minIndex);
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
