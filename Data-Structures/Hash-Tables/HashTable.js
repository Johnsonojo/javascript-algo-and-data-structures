class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    this.keyMap.push([{ key, value }]);
    return index;
  }

  get(key) {
    let hashedKey = this._hash(key);
    const keyArray = this.keyMap[hashedKey];
    for (let i = 0; i < keyArray.length; i++) {
      const element = keyArray[i];
      if (element[key]) return element[key];
      return undefined;
    }
  }
}

let hashTable = new HashTable();
console.log(hashTable.set("hello world", "goodbye!!"));
