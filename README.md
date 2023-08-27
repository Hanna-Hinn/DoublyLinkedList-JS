# DoublyLinkedList-JS
A doubly Linked List is a data structure used in programming to organize a collection of nodes in a linear order. Where each double-linked list node contains two references to both the next and previous nodes in the list.  

It is used when we need to traverse the list in both directions, such as implementing features like undo/redo functionality or moving both forward and backward in a text editor.   

However, they come with the expense of increased memory usage due to the extra 'previous' references.  

## Code Structure

## Methods
- push(value): The method takes value to add as a parameter and assigns it as the tail of the list.
- pop(): The method removes the tail of the list.
- shift(): The shift method removes the head of the list.
- unshift(value): The unshift method takes a value as a parameter and assigns it as the head of the list.
- get(index): The get method takes an index number as a parameter and returns the value of the node at that index.
- set(index, value): The set method takes an index number and a value as parameters and modifies the node value at the given index in the list.
- insert(index, value): The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false.
- remove(index): The remove method takes an index number as a parameter and removes the node at the given index in the list.
