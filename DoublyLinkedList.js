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

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.head.value;
    }
    if (index === this.length - 1) {
      return this.tail.value;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      this.head.value = value;
      return;
    }
    if (index === this.length - 1) {
      this.tail.value = value;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.unShift(value);
      return true;
    }
    let current = this.head;
    const newNode = new listNode(value);
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    const tmp = current.value;
    current.prev.next = current.next;
    current.next.prev = current.prev;
    return tmp;
  }
}

module.exports = DoublyLinkedList;
