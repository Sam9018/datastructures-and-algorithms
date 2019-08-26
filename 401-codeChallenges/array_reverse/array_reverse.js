'use strict';

// The white board today was to reverse an array without using .reverse or other build in functions. We also had to use the ssame array. We couldnt jsut push them into a new array.

const reverseArr = module.exports = {};

arr = [1,2,3,4,5];

function reverseArr(arr){
  for(var i=0; i <= (arr.length -1)/2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
  }
  console.log(arr);
  return arr
}

// spent far to long on this last line. Code jsut was not working no matter what i did until about 20 minutes later i realized that i hadnt passed arr into the function call. Finally caught it though

reverseArr(arr);


