class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
}

let newMinBinaryHeap = new MinBinaryHeap();
newMinBinaryHeap.insert(41);
newMinBinaryHeap.insert(39);
newMinBinaryHeap.insert(33);
newMinBinaryHeap.insert(18);
newMinBinaryHeap.insert(27);
newMinBinaryHeap.insert(12);
newMinBinaryHeap.insert(55);

console.log(newMinBinaryHeap.values);
