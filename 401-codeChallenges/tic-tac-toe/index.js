'use strict';

function whoWon(board){
  board.forEach(arr => {
    let group = [arr[0], arr[1], arr[2]]
    groups.push(group);
  });
  for(let x=0; x<3; x++){
    group = [];
    for(let y=0; y<3; y++){
      group.push(board[y][x]);
    }
    
  }
}