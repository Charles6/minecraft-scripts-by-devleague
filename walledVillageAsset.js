'use strict';
var Drone= require('drone'),
	blocks= require('blocks');

function redHouse(argument) {
	this.chkpt("redCk")
		.right(2)
		.fwd(2)
		.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0(blocks.wool.red,8,4,8)
		.up(4)
		.box("42",8,1,8)
		.move("redCk");
};
Drone.extend(redHouse);

function blueHouse(argument) {
	this.chkpt("blueCk")
		.right(2)
		.fwd(2)
		.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0(blocks.wool.blue,8,4,8)
		.up(4)
		.box("42",8,1,8)
		.move("blueCk");
};
Drone.extend(blueHouse);

function yellowHouse(argument) {
	this.chkpt("yellowCk")
		.right(2)
		.fwd(2)
		.box("2",10,1,10)
		.fwd(1)
		.right(1)
		.box0("5",8,4,8)
		.up(4)
		.box("5",8,1,8)
		.move("yellowCk");
};
Drone.extend(yellowHouse);



function houseSet(){
	var randHouse = Math.floor(Math.random()*9);
	switch(randHouse) {
	    case 0:
	        this.pasky();
	        break;
	    case 1:
	        this.bunker();
	        break;
	    case 2:
	        this.farmSet();
	        break;
	    case 3:
	    	var stories = Math.floor(Math.random()*5);
	    	this.wholeThing(stories);
	    	break;
	    case 4:
	    	this.mcDonalds();
	    	break;
	    case 5:
	    	this.theseResources();
	    	break;
	    case 6:
	    	this.stuff2();
	    	break;
	    case 7:
	    	this.HQ();
	    	break;
	    case 8:
	    	this.HQ();
	    	break;

	    default:
	    	this.yellowHouse();
	};
};
Drone.extend(houseSet);