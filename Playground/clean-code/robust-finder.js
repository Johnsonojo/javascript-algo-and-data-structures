class FindValue {
  static findValueInArray(array, key) {
    for (const item of array) {
      if (item[key]) {
        return item[key];
      }
    }
    return null;
  }

  static findValueInObject(object, key) {
    return object[key] || null;
  }

  static findValueInHashMap(hashMap, key) {
    return hashMap.get(key) || null;
  }
}

const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
const object = { a: 1, b: 2, c: 3 };
const hashMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(FindValue.findValueInArray(array, "b"));
console.log(FindValue.findValueInObject(object, "b"));
console.log(FindValue.findValueInHashMap(hashMap, "b"));
