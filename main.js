// const DoublyLinkedList = require("./DoublyLinkedList");
import { DoublyLinkedList } from "./DoublyLinkedList.js";

const doublyList = new DoublyLinkedList();

// UnComment Code to test

// push method testing

doublyList.push(1);
doublyList.push(2);
doublyList.push(3);
doublyList.push(4);
doublyList.push(5);

doublyList.traverse();

// pop method testing

// doublyList.pop(); // [1 2 3 4]
// doublyList.pop(); // [1 2 3]
// doublyList.pop(); // [1 2]
// doublyList.pop(); // [1]
// doublyList.pop(); // []
// doublyList.pop(); // Will make no difference but will return null

// doublyList.traverse();


/////////////////////////////////////////////////////////////////////////////////////////

// shift method testing

// doublyList.shift(); // [ 2 3 4 5 ]
// doublyList.shift(); // [ 3 4 5 ]
// doublyList.shift(); // [ 4 5 ]
// doublyList.shift(); // [ 5 ]
// doublyList.shift(); // [ ]
// doublyList.shift(); // return null

// doublyList.traverse();

/////////////////////////////////////////////////////////////////////////////////////////

// unshift method testing

// doublyList.unShift(10); // [ 2 3 4 5 ]

// doublyList.traverse();

/////////////////////////////////////////////////////////////////////////////////////////

// get method testing

// console.log(
//   doublyList.get(20), // Expected return null
//   doublyList.get(-1), // Expected return null
//   doublyList.get(0), // Expected return 1
//   doublyList.get(4), // Expected return 5
//   doublyList.get(2) // Expected return 3
// );

/////////////////////////////////////////////////////////////////////////////////////////

// set method testing

// doublyList.set(0, 10); // [ 10 2 3 4 5 ]
// doublyList.set(1, 20); // [ 10 20 3 4 5 ]
// doublyList.set(4, 50); // [ 10 20 3 4 50 ]

// doublyList.traverse();

/////////////////////////////////////////////////////////////////////////////////////////

// insert method testing

// doublyList.insert(-1, 10); // return false
// doublyList.insert(0, 10); // [ 10 1 2 3 4 5 ] return true
// doublyList.insert(2, 20); // [ 10 1 20 2 3 4 5 ] return true
// doublyList.insert(6, 50); // [ 10 1 20 2 3 4 50 5 ] return true
// doublyList.insert(100, 10); // return false

// doublyList.traverse();

/////////////////////////////////////////////////////////////////////////////////////////

// remove method testing

doublyList.remove(-1); // return null
doublyList.remove(0); // [ 2 3 4 5 ] returns 1
doublyList.remove(3); // [ 2 3 4 ] returns 5
doublyList.remove(1); // [ 2 4 ] returns 3
doublyList.remove(200); // returns null

doublyList.traverse();