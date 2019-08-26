'use strict';



class Stack {
  constructor(){
    this.top = null;
  }

  push( value ){
    let newNode = new Node (value);
    if (this.top === null){
      this.top = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode;
    }
    return this.top;
  }

  pop(){
    if (this.top === null) return null;
    let topNode = this.top;
    this.top = topNode.next;
    topNode.next = null;
    return topNode.value;
  }

  peek(){
    if (this.top === null){
      return null;
    }else{
      return this.top.value;
    } 
  }
}

class queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let newNode = new Node (value);
    if (this.rear) {
      this.rear.next = newRear;
      this.rear = newRear;
    }else {
      this.rear = newRear;
      this.front = newRear
    }
  }

  dequeue(){
    let current = this.rear;
    while(current !== null){
      if(current.next === this.front){
        current.next = null;
        this.front = current;
      }
      current = current.next;
    }
  }
}