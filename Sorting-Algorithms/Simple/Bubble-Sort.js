// A sorting algorithm where the largest values bubble up to the top
// Bubble sort is a comparison sort, meaning that it can be implemented using a comparison operator (e.g. <, >, <=, >=, etc.).
// The bubble sort algorithm works by repeatedly stepping through the list, comparing adjacent pairs and swapping them if they are in the wrong order.
// The algorithm is named for the way smaller bubbles are always bubbled up to the top.
// The algorithm is O(n^2) in worst-case and O(n) in average-case.
// The algorithm is stable and does not require a temporary storage array.
// Space Complexity: O(1)
// Time Complexity:
// Best Case: O(n)
// Worst Case: O(n^2)
// Average Case: O(n^2)

// Bubble Sort performs very well for arrays that are almost sorted.
function bubbleSortAscendingOrder1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortAscendingOrder2(arr) {
  let noSwaps;
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function bubbleSortDescendingOrder1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortDescendingOrder2(arr) {
  let noSwaps;
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j + 1, j);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSortAscendingOrder1([37, 45, 29, 8, -3, -45]));
console.log(bubbleSortAscendingOrder2([37, 45, 29, 8, -3, -45]));
console.log(bubbleSortDescendingOrder1([37, 45, 29, 8, -3, -45]));
console.log(bubbleSortDescendingOrder2([37, 45, 29, 8, -3, -45]));
