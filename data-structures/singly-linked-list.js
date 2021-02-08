'use strict';

const testingUtils = require('../utilities/testing-utils');

const testCases = [
  // Case 1: 
  //
  // 3 => -5 => 7 => 12 => -2 => 23 => 7 => 0 => 10 => null
  //   =>
  // -5 => 12, -2 => 23 => 7 => 0 => 10 => 6 => 3 => 0 => 3 => null
  //
  [
    {
      'construct' : [3, -5, 7, 12, -2, 23, 7, 0, 10],
      'remove_1' : 10,
      'pop' : undefined,
      'append' : 6,
      'shift': undefined,
      'remove_2' : 7,
      'return' : undefined
    },
    '-5 => 12 => -2 => 23 => 7 => 6 => null'
  ],

  // Case 2: 
  //
  // null
  //   =>
  // 12 => 23 => null
  //
  [
    {
      'construct' : [],
      'append_1' : 6,
      'append_2' : 12,
      'append_3' : 23,
      'shift': undefined,
      'remove_1' : 7,
      'return' : undefined
    },
    '12 => 23 => null'
  ],

  // Case 3: 
  //
  // 3 => -5 => 7 => 12 => NaN => 23 => 7 => 0 => 10 => null
  //   =>
  // '12 => NaN => 23 => 7 => 6 => 3 => 0 => 3 => null'
  //
  [
    {
      'construct' : [3, -5, 7, 12, NaN, 23, 7, 0, 10],
      'remove_1' : 10,
      'pop' : undefined,
      'append' : 6,
      'shift_1': undefined,
      'shift_2': undefined,
      'concat': [3, 0, 3],
      'remove_2' : 7,
      'return' : undefined
    },
    '12 => NaN => 23 => 7 => 6 => 3 => 0 => 3 => null'
  ],
]

const SinglyNode = function(value, next = null) {
  this.value = value;
  this.next = next;
}

const SinglyLinkedList = function (values) {
  if (values && values.length > 0) {
    this.head = new SinglyNode(values[0]);
    let curr = this.head;

    for (const value of values.slice(1)) {
      curr.next = new SinglyNode(value);;
      curr = curr.next;
    }
    this.tail = curr;
  } else this.head = undefined;
}

SinglyLinkedList.prototype.append = function (value) {
  if (!this.head) this.head = new SinglyNode(value);
  else {
    let curr = this.head;

    while(curr.next !== null) 
      curr = curr.next;

    curr.next = new SinglyNode(value);
  } 
};

SinglyLinkedList.prototype.concat = function (values) {
  for (const value of values) {
    this.append(value, this);
  }
};

SinglyLinkedList.prototype.pop = function () {
  const tail = this.tail;
  let curr = this.head;

  while (curr && 
    curr.next !== null && 
    curr.next.next !== null)
    curr = curr.next;
  
  curr.next = null;

  this.tail = curr;
  
  return tail;
};

SinglyLinkedList.prototype.remove = function (value) {
  if (this.head) {

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    while (curr && 
      curr.next !== null &&
      curr.next.next !== null && 
      curr.next.value !== value)
      curr = curr.next;

    if (curr.next.value === value) {
      if (curr.next === null) curr = undefined;
      else curr.next = curr.next.next;
    }
  }
};

SinglyLinkedList.prototype.shift = function () {
  const head = this.head;
  this.head = this.head.next;
  return head.value;
};

SinglyLinkedList.prototype.clear = function () {
  this.head = undefined;
};

SinglyLinkedList.prototype.print = function () {
  let curr = this.head, list = '';

  while (curr && curr.next !== null)
    list += `${curr.value} => `,
    curr = curr.next;
  return `${list}${curr ? `${curr.value} => ${curr.next}` : 'null'}`;
};

const testSinglyLinkedListMethodsWith = operations => {
  let singlyLinkedList = undefined;

  for (const operator in operations[0]) {
    const operand = operations[0][operator];

    switch(operator.split('_')[0]) {
      case 'construct' :
        singlyLinkedList = new SinglyLinkedList(operand);
        break;
      case 'append' :
        singlyLinkedList.append(operand);
        break;
      case 'concat' :
        singlyLinkedList.concat(operand);
        break;
      case 'pop' :
        singlyLinkedList.pop();
        break;
      case 'remove' :
        singlyLinkedList.remove(operand);
        break;
      case 'shift' :
        singlyLinkedList.shift();
        break;
      case 'clear' :
        singlyLinkedList.clear();
        break;
      case 'return' :
        return singlyLinkedList.print();
    }
  }
};

testingUtils.runTestsTo(testSinglyLinkedListMethodsWith, testCases);

module.exports = exports = { SinglyLinkedList, SinglyNode };
