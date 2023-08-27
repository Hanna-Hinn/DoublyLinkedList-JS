/*
    ListNode Class takes a value and have a next and prev ListNode reference
*/
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = ListNode;