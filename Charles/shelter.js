'use strict'
var Drone = require('drone'),
  blocks = require('blocks');

var side;
var height;

function shelter(size) {

  if (typeof size == 'undefined') {
    side = 5;
    height = 5;
  }
  else if (typeof size != 'string') {
    echo("please put in a string");
    return;
  }
  else if ( size == "small"){
    side = 5;
    height = 5;
  }
  else if ( size == "medium"){
    side = 7;
    height = 7;
  }
  else if (size == "large"){
    side = 11;
    height = 7;
  }
  else {
    echo("This is not a proper parameter");
    return;
  }
  this
    .box(blocks.oak, side, 1, side)
    .up(1)
    .box(blocks.air, side, height, side)
    .box0(blocks.brick.stone, side, height, side)
    .right(side/2)
    .door()
    .left(side/2)
    .fwd(1)
    .right(1)
    .bed()
    .up(height-2)
    .box(blocks.oak, side-2, 1, side-2)
    .down(height-2)
    .fwd(side-3)
    .ladder(height);
}
Drone.extend(shelter);