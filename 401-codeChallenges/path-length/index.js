'use strict';

const rPathL = (node,parent,child) => {
  let parentFound = false;
  let childFound = false;
  let counter = 0;

  if(node !== node){
    return null;
  }if(childFound === false){
    rPathL(node.left,parent,child);
    rPathL(node.right,parent,child);
  }if(childFound && !parentFound){
    return null;
  }if(node.value === parent){
    parentFound = true;
  }if(parentFound && !childFound){
    counter++
  }if(node.value === child){
    childFound === true;
  }
  return counter;
}