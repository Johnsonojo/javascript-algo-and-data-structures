/**
 * Queue
 * A queue is a data structure that contains a list of elements.
 * The elements are added and removed from the front of the queue.
 * The first element added to the queue will be the first element removed from the queue.
 * This is called FIFO (First In First Out).
 *
 * The Big O of queues
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first === null;
      this.last === null;
    }
    let nodeToDequeue = this.first;
    this.first = nodeToDequeue.next;
    this.size--;

    return nodeToDequeue.value;
  }
}

let queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.dequeue());
