class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH(add a new node to the end of the list)
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP(remove the last node from the list)
  pop() {
    let tailToPop = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tailToPop.prev;
      this.tail.next = null;
      tailToPop.prev = null;
    }
    this.length--;
    return tailToPop;
  }

  // SHIFT(remove a node from the beginning of the linked list)
  shift() {
    if (!this.head) return undefined;
    let headToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = headToRemove.next;
      this.head.prev = null;
      headToRemove.next = null;
    }
    this.length--;
    return headToRemove;
  }

  // UNSHIFT(add a node to the beginning of the linked list)
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      current.prev = newNode;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
list.pop();
list.shift();
list.unShift(30);
console.log(list);
