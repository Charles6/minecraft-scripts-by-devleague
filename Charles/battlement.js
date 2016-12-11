'use strict';
var Drone = require('drone'),
    blocks = require('blocks');

function battlement( type ) {
  if (typeof type == 'undefined') {
    this.wall();
    return;
  }
  else if (typeof type != 'string') {
    echo("please put in a string");
    return;
  }
  else if ( type == "wall"){
    this.wall();
    return;
  }
  else if ( type == "corner"){
    this.corner();
    return;
  }
  else if ( type == "gate"){
    this.gate();
    return;
  }
  else {
    echo("This is not a proper parameter");
    return;
  }
};
Drone.extend( battlement );


function wall() {
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
    .down(1);
}
Drone.extend( wall );

function gate() {
  this
    .up(1)
    .box(blocks.brick.stone,10,10,1)
    .right(3)
    .door2()
    .left(3)
    .fwd(4)
    .box(blocks.brick.stone,10,10,1)
    .back(3)
    .up(8)
    .box(blocks.oak,10,1,3)
    .down(8)
    .right(3)
    .fwd(3)
    .door2()
    .back(4)
    .right(7)
    .down(1);
}
Drone.extend( gate );

function corner() {
  this
    .up(1)
    .box0(blocks.brick.stone,5,13,5)
    .fwd(1)
    .right(1)
    .up(8)
    .box(blocks.oak,3,1,3)
    .up(3)
    .box(blocks.oak,3,1,3);
}
Drone.extend( corner );