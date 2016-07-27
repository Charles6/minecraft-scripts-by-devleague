'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    events = require('events');

var floorNames = ["Executives","Cake Mgmnt.","PR","Advert.","Stock Mgmnt."],
    arrayAccess

function cakeflr1(){
  this.up(1)
      .box0("155:1",10,5,10)
      .fwd(1)
      .right(1)
      .down(1)
      .box("155:3",8,1,8)
      .up(1)
      .back(1)
      .right(3)
      .door2()
      .fwd(7)
      .left(1)
      .box(blocks.stained_clay.lightblue,4,1,1)
      .left(2)
      .down(1)
      .fwd(1)
      .box("169",1,1,1)
      .right(7)
      .box("169",1,1,1)
      .back(7)
      .box("169",1,1,1)
      .left(7)
      .box("169",1,1,1)
      .left(1)
      .up(5)
      .back(1);
      // .box(blocks.stained_glass_pane.lightblue,4,1,1)
      // .fwd(9)
      // .box(blocks.stained_glass_pane.lightblue,10,1,1)
      // .box("1",1,1,1)
      // .turn()
      // .turn()
      // .box(blocks.stained_glass_pane.lightblue,1,1,10)
      // .right(9)
};
Drone.extend(cakeflr1)

function cakeflrN(){
  this.box("155:1",10,1,10)
      .up(1)
      .box0(blocks.stained_glass.lightblue,10,2,10)
      .up(2)
      .box("155:1",10,1,10);
      // .wallsign(floorNames[math.floor(math.ramdom()*5)]);
};
Drone.extend(cakeflrN);

function execBuilding(){
  this.chkpt("execBuildingStart")
      .cakeflr1();
      for (var i = 0; i < 5; i++) {
        this.cakeflrN();
        };
      this.move("execBuildingStart");
};
Drone.extend(execBuilding);
// function execBuilding(){
//     this.cakeflr1():
//   var Nfloors = math.floor(math.random()*5)+1;
// for(i= 0; i <= Nfloors; i++;){
//     this.floorsN();
//   }
// };
// Drone.extend(execBuilding)
