'use strict';
var Drone= require('drone'),
	blocks= require('blocks');



function redHouse(argument) {
	this.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0(blocks.wool.red,8,4,8)
		.up(4)
		.box("42",8,1,8)
		.down(4)
		.back(1)
		.left(1);
};
Drone.extend(redHouse);

function blueHouse(argument) {
	this.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0(blocks.wool.blue,8,4,8)
		.up(4)
		.box("42",8,1,8)
		.down(4)
		.back(1)
		.left(1);
};
Drone.extend(blueHouse);

function yellowHouse(argument) {
	this.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0(blocks.wool.yellow,8,4,8)
		.up(4)
		.box("42",8,1,8)
		.down(4)
		.back(1)
		.left(1);
};
Drone.extend(yellowHouse);



function houseSet(){
	var randHouse = Math.floor(Math.random()*8);
	switch(randHouse) {
	    case 0:
	        this.redHouse();
	        break;
	    case 1:
	        this.blueHouse();
	        break;
	    case 2:
	        this.cakeyking();
	        break;
	    case 3:
	    	this.sky();
	    	break;
	    case 4:
	    	this.pool();
	    	break;
	    case 5:
	    	this.house();
	    	break;
	    case 6:
	    	this.execBuilding();
	    	break;
	    case 7:
	    	this.dot();
	    	break;
	    default:
	    	echo(self,"Test");
	};
};
Drone.extend(houseSet);