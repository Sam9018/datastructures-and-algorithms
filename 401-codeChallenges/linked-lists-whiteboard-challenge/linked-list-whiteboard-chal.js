'use strict';

class LinkedList(node){
  Constructor{
    this.head= node;
  }
  append(value){
    const tail = traversal(this.head);
    tail.next=value;
  }
}

function traversial(llHead){
  let currentNode = llHead;
  if(currentNode.next === null){
    return currentNode;
  }else{
    traversial(currentNode.next)
  }
}