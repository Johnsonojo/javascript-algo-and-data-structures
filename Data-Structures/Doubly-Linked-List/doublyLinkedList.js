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
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail.prev;
      newTail.prev = null;
      newTail.next = null;
      this.length--;
      return current;
    }
  }

  // SHIFT(add a node to the beginning of the linked list)
  shift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      this.head = newNode;
      newNode.next = current;
      current.prev = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
console.log(list.pop());
list.shift(30);
console.log(list);
