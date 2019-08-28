'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    const newHead = new Node(value);
    if(this.head===null){
      this.head = newHead;
    }else{
      newHead.next = this.head;
      this.head = newHead;
    }
  }
}

const mergeLists = (listA, listB) => {
  if(listA.head === null){
    return listB;
  }
  if(listB.head === null){
    return listA;
  }
  let anchor;
  let anchor2;
  let first = listA.head;
  let second = listB.head;

  while(first.next !== null && second !== null){
    anchor = first.next;
    anchor2 = second.next
    first.next = second;
    first = anchor;
    second.next = first;
    second = anchor2;
    // not sure if i need thise last 2 lines to reset the anchors
    // anchor = first.next;
    // anchor2 = second.next;
  }

  if(first.next === null){
    first.next = second;
    return listA;
  }else{
    return listA;
  }
};
