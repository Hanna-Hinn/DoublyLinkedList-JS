const listNode = require("./ListNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0 && this.head === null ? true : false;
  }

  traverse() {
    let current = this.head;
    let str = `[`;
    while (current) {
      str += ` ${current.value} `;
      current = current.next;
    }
    str += `]`;
    console.log(str);
  }

  push(value) {
    const newNode = new listNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.length === 1) {
      const tmp = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tmp;
    }
    const tmp = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return tmp;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }
    const tmp = this.head.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tmp;
    }

    this.head = this.head.next;
    return tmp;
  }

  unShift(value) {
    const newNode = new listNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
}

module.exports = DoublyLinkedList;
