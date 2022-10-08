/**
 * A stack is a data structure that contains a list of elements.
 * The elements are added and removed from the top of the stack.4
 * The last element added to the stack will be the first element removed from the stack.
 * This is called LIFO (Last In First Out).
 *
 * The Big O of stacks
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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first === null;
      this.last === null;
    }
    let nodeToPop = this.first;
    this.first = nodeToPop.next;
    this.size--;

    return nodeToPop.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

console.log("stack.pop()", stack.pop());

console.log("stack", stack);
