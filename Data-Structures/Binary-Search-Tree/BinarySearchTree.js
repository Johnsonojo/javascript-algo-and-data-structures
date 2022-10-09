/**
 * Binary Tree
 * A Binary Tree is a tree data structure in which each node has at most two children,
 * which are referred to as the left child and the right child.
 *
 *
 * Binary Search Tree
 * A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties −
 * The left sub-tree of a node has a key less than or equal to its parent node's key.
 * The right sub-tree of a node has a key greater than its parent node's key.
 * Thus, BST divides all its sub-trees into two segments; the left sub-tree
 * and the right sub-tree and can be defined as −
 * left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys)
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

let newBST = new BST();

newBST.insert(10);
newBST.insert(5);
newBST.insert(2);
newBST.insert(11);

console.log(newBST);
