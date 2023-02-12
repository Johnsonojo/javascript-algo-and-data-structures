class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
    }
  }

  extractMax() {
    let max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return max;
  }
}
let newMaxBinaryHeap = new MaxBinaryHeap();
newMaxBinaryHeap.insert(41);
newMaxBinaryHeap.insert(39);
newMaxBinaryHeap.insert(33);
newMaxBinaryHeap.insert(18);
newMaxBinaryHeap.insert(27);
newMaxBinaryHeap.insert(12);
newMaxBinaryHeap.insert(55);
console.log(newMaxBinaryHeap.values);
