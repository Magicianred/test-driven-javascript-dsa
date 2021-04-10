/*
 *
 *  Only print middle node data of a singly-linked list.
 *
 */
const testingUtils = require('../../../utilities/testing-utils');
const testCases = [
  [[], 'empty list'],
  [['a'], 'a'],
  [['a', 'b'], 'a'],
  [['a', 'b', 'c'], 'b'],
  [[1, 2, 3, 4, 5, 6], '3'],
  [null, 'empty list'],
  [undefined, `\'head\' is not a singly-linked list`],
  [1, `\'head\' is not a singly-linked list`],
  ['a', `\'head\' is not a singly-linked list`],
];

function SinglyLinkedList(data) {
  this.data = data;
  this.next = null;
}

const onlyPrintMiddleNodeDataFor = (testCase) => {
  let head, curr, fast, slow;

  testCase = testCase.pop();

  if (Array.isArray(testCase)) {

    head = testCase.length > 0 ?
      new SinglyLinkedList(testCase.shift()) : null

    curr = head;

    testCase.forEach((element) => {
      curr.next = new SinglyLinkedList(element);
      curr = curr.next;
    });
  } else head = testCase;

  if (typeof head !== 'object' && (!head || !Array.isArray(head))) {
    return '\'head\' is not a singly-linked list';
  }
  else if (head === null) { return 'empty list'; }
  else if (head.next === null) { return `${head.data}`; }
  else {
    fast = slow = head;
    while (fast && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return `${slow.data}`;
  }
}

testingUtils.runTestsTo(onlyPrintMiddleNodeDataFor, testCases);
