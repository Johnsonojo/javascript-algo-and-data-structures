function search(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (array[middle] !== value && left <= right) {
    if (array[middle] > value) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
