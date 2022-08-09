// Singly Linked List
// - A singly linked list is a linear data structure in which each element
// is a pointer to the next element in the list.
// - The first element of the list is called the head of the list.
// - The last element of the list is called the tail of the list.
// Each element in the list is a node.
// - The head of the list is the first node in the list.
// - The tail of the list is the last node in the list.
// - The next node in the list is the node immediately following the current node.
// - The previous node in the list is the node immediately preceding the current node.

// Each node has a value and a pointer to the next node in the list.
// - The value is the data stored in the node.
// - The pointer is the location of the next node in the list.
// - The pointer is null if the node is the tail of the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH (add a node to the end of the list)
  push(val) {
    // create a new node using the value
    const newNode = new Node(val);
    // if there is no head, set the head to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.tail.next = null;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP (remove a node from the end of the list)
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
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return current;
    }
  }

  // SHIFTING (remove a new node from the beginning of the linked list)
  shift() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }
  }

  // UNSHIFT (add a node at the beginning of the linked list)
  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.tail.next = null;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // GET (get a node by its position in the linked list)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // UPDATE (change the value of a node based on it's position in the linked list)
  //also called set
  updateNodeAtIndex(index, value) {
    if (index < 0 || index >= this.length) return null;
    let nodeToUpdate = this.get(index);
    nodeToUpdate.val = value;
    return this;
  }

  // SET (set a node at a given index) also called insert
  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unShift(value);

    const newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nodeToDisplace = this.get(index);
    previousNode.next = newNode;
    newNode.next = nodeToDisplace;
    this.length++;
    return true;
  }

  // REMOVE (remove a node from the linked list at a given index)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previousNode = this.get(index - 1);
    let nodeToDelete = previousNode.next;
    previousNode.next = nodeToDelete.next;
    this.length--;
    return nodeToDelete;
  }
}

const list = new SinglyLinkedList();

list.push(10);
list.push(11);
list.push(12);
// list.push(13);
// list.push(14);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unShift(9));
// console.log(list.unShift(8));
// console.log(list.get(3));
// console.log(list.updateNodeAtIndex(1, 20));
// console.log(list.insertAtIndex(1, 20));
console.log(list.remove(2));
console.log(list);
