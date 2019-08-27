'use strict';

class PsuedoQueue{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }

  enqueue(value){
    if(this.in.isEmpty()){
      while(this.out.peek()){
        this.in.push(this.out.pop())
      }
    }
    this.in.push(value);
  }

  dequeue(){
    if(this.out.isEmpty()){
      while(this.in.peek()){
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}