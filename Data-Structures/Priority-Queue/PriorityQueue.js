/**
 * Priority Queue
 * A priority queue is a data structure where each element has a priority.
 * Elements with higher priorities are served before elements with lower priorities.
 * This is similar to the queue data structure, but instead of a first-in-first-out (FIFO) order, elements are served based on their priority.
 * The Big O of priority queues
 * Insertion - O(log n)
 * Removal - O(log n)
 * Searching - O(n)
 * Access - O(n)
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
}

let newPriorityQueue = new PriorityQueue();

newPriorityQueue.enqueue("eat", 0);
newPriorityQueue.enqueue("sleep", 1);
newPriorityQueue.enqueue("wake up", 2);
newPriorityQueue.enqueue("fast", 0);
console.log(newPriorityQueue.dequeue());
console.log(newPriorityQueue.values);
