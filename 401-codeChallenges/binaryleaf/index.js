'use strict';

function printLeaf(root){
  let stack = [];
  let arr = [];
  stack.push(root);
  while(stack.length > 0){
    const currentNode = stack.pop();
    if(currentNode.left !== null){
      stack.push(currentNode.left)
    }
    if(currentNode.right !== null){
      stack.push(currentNode.right)
    }
    if(currentNode.left === null && currentNode.right === null){
      arr.push(currentNode)
    }
  }
  return arr;
}