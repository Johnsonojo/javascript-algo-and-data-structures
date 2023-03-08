class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIdx];
      if (element <= parentValue) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentValue;
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
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    let max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
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
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.extractMax());
console.log(newMaxBinaryHeap.values);
