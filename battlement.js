'use strict';
var Drone = require('drone'),
    blocks = require('blocks');

function battlement( sections ) {
  var i ;
  if (typeof sections == 'undefined'){
    sections = 5;
}

  for (i = 0; i < sections; i++ ){
    this
      .up(1)
      .box(blocks.brick.stone,10,10,1)
      .right(3)
      .door()
      .left(3)
      .fwd(4)
      .box(blocks.brick.stone,10,10,1)
      .back(3)
      .up(8)
      .box(blocks.oak,10,1,3)
      .down(8)
      .right(3)
      .fwd(3)
      .ladder(10)
      .back(4)
      .right(7)
      .down(1)
  }
};
Drone.extend( battlement );