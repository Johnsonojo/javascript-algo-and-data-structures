// Leetcode 701 solution
var insertIntoBST = function (root, val) {
  let newNode = new TreeNode(val);
  if (root === null) {
    root = newNode;
    return root;
  }
  let current = root;
  while (true) {
    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        return root;
      } else {
        current = current.left;
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
        return root;
      } else {
        current = current.right;
      }
    }
  }
};

// Leetcode 226 solution
// Given the root of a binary tree, invert the tree, and return its root.
var invertTree = function (root) {
  if (root === null) return null;
  invertTree(root.left);
  invertTree(root.right);
  let temp;
  temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

// Leetcode 102 solution
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

var levelOrder = function (root) {
  if (root === null) return [];

  let result = [];
  let queue = [];
  let current = root;

  queue.push(current);
  while (queue.length) {
    let queueLen = queue.length;
    const innerArray = [];
    for (let i = 0; i < queueLen; i++) {
      current = queue.shift();
      innerArray.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(innerArray);
  }
  return result;
};

// Leetcode 897 solution
// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

var increasingBST = function (root) {
  let result = [];

  function DFSinOrder(node) {
    if (node === null) return null;
    if (node.left) DFSinOrder(node.left);
    result.push(node.val);
    if (node.right) DFSinOrder(node.right);
  }

  DFSinOrder(root);

  let newNode = new TreeNode(result[0]);
  let current = newNode;
  for (let i = 1; i < result.length; i++) {
    current.right = new TreeNode(result[i]);
    current = current.right;
  }
  return newNode;
};

// Leetcode 108 solution
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  // Since the nums array is sorted in ascending order
  // We assume all the elem of the array are less than the middle elem

  // Calculate the middle of the array
  let mid = Math.floor(nums.length / 2);

  // Create the root node
  let root = new TreeNode(nums[mid]);

  // Create array for left and right part of the tree
  let leftArray = nums.slice(0, mid);
  let rightArray = nums.slice(mid + 1);

  // Recursively create the left subtree with the left array values
  root.left = sortedArrayToBST(leftArray);

  // Recursively create the right subtree with the right array values
  root.right = sortedArrayToBST(rightArray);

  // Return the root
  return root;
};
