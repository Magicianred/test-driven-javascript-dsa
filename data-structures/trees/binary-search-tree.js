const testingUtils = require("../../utilities/testing-utils");
const testCases = [
  [1, 3, 21, 8, 1, 13, 5, 34, "1, 1, 3, 5, 8, 13, 21, 34"],
  [1, "1"],
  ["b", "f", "e", "d", "g", "c", "h", "a", "a, b, c, d, e, f, g, h"],
  ["3", "2", "a", "1", "b", "1, 2, 3, a, b"],
  [3, 2, undefined, "2, 3"],
];

const Tree = function () {
  this.root = null;
  this.stringBuilder = "";
};

Tree.prototype.print = function () {
  for(const data of this.root.visit())
    this.stringBuilder += data;
  return this.stringBuilder.trim().split(" ").join(", ");
};

Tree.prototype.insert = function (data) {
  const node = new BinarySearchTreeNode(data);
  this.root === null ? (this.root = node) : this.root.insert(node);
};

const BinarySearchTreeNode = function (data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
};

BinarySearchTreeNode.prototype.insert = function (node) {
  if (node.data <= this.data) {
    this.left === null ? (this.left = node) : this.left.insert(node);
  } else if (node.data > this.data) {
    this.right === null ? (this.right = node) : this.right.insert(node);
  }
};

BinarySearchTreeNode.prototype.visit = function* () {
  // Go left.
  if (this.left !== null) yield* this.left.visit();
  // Get node data.
  yield `${this.data} `;
  // Go right.
  if (this.right !== null) yield* this.right.visit();
};

const createBinarySearchTreeWith = (testCase) => {
  const bst = new Tree();
  testCase.forEach((element) => {
    bst.insert(element);
  });
  return bst.print();
};

testingUtils.runTestsTo(createBinarySearchTreeWith, testCases);

module.exports = exports = { BinarySearchTreeNode, Tree };
