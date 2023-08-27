const DoublyLinkedList = require("./DoublyLinkedList");

const doublyList = new DoublyLinkedList();

// doublyList.push(1);
// doublyList.push(2);

// doublyList.traverse();

// console.log(doublyList.pop(), doublyList.pop(), doublyList.pop()); // null was returned for empty list

// doublyList.traverse();

doublyList.push(1);
doublyList.push(2);
doublyList.push(3);
doublyList.push(4);
doublyList.push(5);

doublyList.traverse();

// doublyList.shift();

// doublyList.traverse();

// doublyList.unShift(1);

// doublyList.traverse();

// console.log(doublyList.get(-1),doublyList.get(0),doublyList.get(2),doublyList.get(doublyList.length-1),doublyList.get(20));

doublyList.set(-1,6);
doublyList.set(0,10);
doublyList.set(2,30);
doublyList.set(doublyList.length-1,50);
doublyList.set(100,"Hello world!");

doublyList.traverse();
