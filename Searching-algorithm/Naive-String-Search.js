function naiveString(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

function naiveString2(long, short) {
  let count = 0;
  for (let i = 0; i <= long.length; i++) {
    let j = 0;
    for (; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
// console.log(naiveString("wowomgzomg", "omg"));
console.log(naiveString2("wowomgzomg", "omg"));

const repeatedSubstringPattern = (s) => {
  let splitted = s.split("");
  let freq = {};
  for (const item of splitted) {
    freq[item] ? (freq[item] += 1) : (freq[item] = 1);
  }
  if (Object.keys(freq).length === 1) return false;
  let allValuesSet = new Set(Object.values(freq));
  return allValuesSet.size === 1;
};

console.log(repeatedSubstringPattern("abcabcabcabcabc"));
console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("a"));

const searchMatrix1 = (matrix, target) => {
  let arr = matrix.flat();

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right && arr[middle] !== target) {
    if (arr[middle] > target) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === target ? true : false;
};

const searchMatrix2 = (matrix, target) => {
  function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  let newSet = new Set(flatten(matrix));
  return newSet.has(target);
};
console.log(
  searchMatrix1(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    300
  )
);

console.log(
  searchMatrix2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
