import { ListNode } from "./ListNode.js";

export class DoublyLinkedList {
  //Constructor function
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // isEmprty function returns true if the length===0 and head===null is empty
  // else returns false
  isEmpty() {
    return this.length === 0 && this.head === null ? true : false;
  }

  // traverse function to print the DoubleLinkedList
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

  // The push method takes a value as a parameter and assigns it as the tail of the list
  push(value) {
    const newNode = new ListNode(value);
    // if list is empty then push at the head and assign it to be tail
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add the new node to the end of the list
      // and assign tail to the new node
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // The pop method removes the tail of the list
  pop() {
    // if empty return null
    if (this.isEmpty()) {
      return null;
    }
    // if length equals 1 then return head node value.
    // since its also the tail of the list
    if (this.length === 1) {
      const tmp = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tmp;
    }
    // otherwise remove the tail node
    // assign tail to the previous node
    // make tail next node reference to null
    const tmp = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return tmp;
  }

  // The shift method removes the head of the list
  shift() {
    // if empty return null
    if (this.isEmpty()) {
      return null;
    }
    // if length equals 1 then return head and make list empty
    const tmp = this.head.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tmp;
    }
    // otherwise remove the head node from the list
    // and make current head points to the next node
    // head.prev points to null
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return tmp;
  }

  // The unshift method takes a value as a parameter and assigns it as the head of the list
  unShift(value) {
    const newNode = new ListNode(value);
    // if list is empty then push at the head and assign it to be tail
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Add the new node to the head of the list
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // The get method takes an index number as a parameter and returns the value of the node at that index
  get(index) {
    // if index is less than 0 and index is greater than length then return null
    if (index < 0 || index >= this.length) {
      return null;
    }
    // if the index is 0 then return head.value
    if (index === 0) {
      return this.head.value;
    }
    // if the index is equal to length-1 (last index) then return tail.value
    if (index === this.length - 1) {
      return this.tail.value;
    }
    // otherwise traverse the list and return the current node at index
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  set(index, value) {
    // if index is less than 0 and index is greater than length then return null
    if (index < 0 || index >= this.length) {
      return null;
    }
    // if the index is 0 then modify head.value
    if (index === 0) {
      this.head.value = value;
      return;
    }
    // if the index is equal to length-1 (last index) then modify tail.value
    if (index === this.length - 1) {
      this.tail.value = value;
      return;
    }
    // otherwise traverse the list and modify the current node at index
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return;
  }

  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list.
  // It returns true on successful insert or false
  insert(index, value) {
    // if index is less than 0 and index is greater than length then return false
    if (index < 0 || index >= this.length) {
      return false;
    }
    // if the index is 0 then unshift and return true;
    if (index === 0) {
      this.unShift(value);
      return true;
    }
    // otherwise traverse the list and insert the new node before current node
    // if we check the new node then we found it at the required index
    let current = this.head;
    const newNode = new ListNode(value);
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
    this.length++;
    return true;
  }

  // The remove method takes an index number as a parameter
  // removes the node at the given index in the list
  remove(index) {
    // if index is less than 0 and index is greater than length then return null
    if (index < 0 || index >= this.length) {
      return null;
    }
    // if the index is 0 then shift and return the removed node;
    if (index === 0) {
      return this.shift();
    }
    // if the index is equal to length-1 (last index)
    // then pop the list and return the tail (last index)
    if (index === this.length - 1) {
      return this.pop();
    }
    // otherwise traverse the list and remove the current node that are at the index
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    const tmp = current.value;
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
    return tmp;
  }
}
