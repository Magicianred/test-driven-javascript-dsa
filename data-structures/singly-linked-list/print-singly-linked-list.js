const testUtils = require('../../utilities/testing-utils');
const testCases = [
  [1,'\'not a singly-linked list\''],
  [[], '\'empty list\''],
  [[1], '1 => null'],
  [[1, 2], '1 => 2 => null'],
  [[1, 3, 4], '1 => 3 => 4 => null'],
  [[1, 1, 3, 4], '1 => 1 => 3 => 4 => null'],
  [[1, null, 3, 4], '1 => null => 3 => 4 => null'],
  [[1, 2, 3, '4'], '1 => 2 => 3 => 4 => null'],
  [[undefined, 2, 3, 4], 'undefined => 2 => 3 => 4 => null'],
  [undefined, '\'not a singly-linked list\''],
  [[null], 'null => null'],
  ['a', '\'not a singly-linked list\'']
];

function SinglyLinkedList(data) {
  this.data = data;
  this.next = null;
}

/* return @void*/
const printSinglyLinkedListFor = (testCase) => {
  let array = testCase.shift();
  let head, curr;

  if(Array.isArray(array)) {
    head = array.length > 0 ? (new SinglyLinkedList(array.shift())) : null;
    curr = head;

    array.forEach(x => {
      const next = new SinglyLinkedList(x);
      curr.next = next;
      curr = curr.next;
    });
  } else head = array;

  let str = '';

  if (typeof head !== 'object' && head?.next === undefined) {
    return '\'not a singly-linked list\''; 
  } else if (head === null) {
    return '\'empty list\'';
  } else {
    while (head !== null) {
      str += `${head.data} => `;
      head = head.next;
    }
    return `${str}null`;
  }
}

testUtils.runTestsTo(printSinglyLinkedListFor, testCases);
