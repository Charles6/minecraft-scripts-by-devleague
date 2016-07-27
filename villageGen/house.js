'use strict';
var Drone= require('drone'),
	blocks= require('blocks');

function house(){
	this.chkpt("houseStart")
		.up(1)
		.box0('5',9,4,9)
		.up(3)
		.right(1)
		.down(3)
		.right(1)
		.door()
		.left(2)
		.up(4)
		.box("5",9,1,9)
		.down(4)
		.right(1)
		.fwd(8)
		.ladder(6)
		.back(7)
		.down(5)
		.stairs(15)
		.move("houseStart");

	};
Drone.extend(house)