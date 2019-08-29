'use strict';

function multiBracketValidation (string){
  let stack = [];
  for(let i = 0; i < string.length; i++){
    if(string[i] === '[' || string[i] === '(' || string[i] === '{'){
      stack.push(string[i]);
    }else if(string[i] === ']' || string[i] === ')' || string[i] === '}'){
      if(string[i] === stack.pop()){
      }else(string[i] !== ']' || string[i] !== ')' || string[i] !== '}'){
        return false;
      }
    }if(string[i] === null && stack === null){
      return true
    }
  }
}