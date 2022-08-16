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

  // GET(accessing a node in a doubly linked list by its index)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // SET(replacing the value of a node with a new value)
  set(index, value) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate !== null) {
      nodeToUpdate.val = value;
      return true;
    }
    return false;
  }

  // INSERT(insert a node at a given index)
  insert(index, value) {
    if (!this.head || index === this.length) return this.push(value);
    if (index === 0) return this.unShift(value);
    if (index < 0 || index >= this.length) return false;

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return this;
  }

  // Remove(remove a node from the hte list at a given index)
  remove(index) {
    if (index === 0) return this.shift();
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let nodeToRemove = previousNode.next;
    let nextNode = nodeToRemove.next;

    previousNode.next = nodeToRemove.next;
    nextNode.prev = previousNode;

    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(11);
list.push(12);
// list.push(13);
// list.push(14);
// list.push(15);
// list.push(16);
// list.push(17);
// list.push(18);
// list.pop();
// list.shift();
// list.unShift(30);
// list.get(5);
// console.log(list.set(2, 5));
// console.log(list.insert(2, 200));
console.log(list.remove(1));
// console.log(list);
