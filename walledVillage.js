'use strict';
var Drone = require('drone'),
	blocks = require('blocks');

function wallEW() {
	this.chkpt("EWroot")
		.box("4",17,8,1)
		.up(8)
		.box("139",17,1,1)
		.down(8)
		.randEW()
		.fwd(1)
		.up(7)
		.box("5",17,1,3)
		.fwd(3)
		.down(7)
		.box("4",17,8,1)
		.up(8)
		.box("139",17,1,1)
		.down(8)
		.randEW()
		.move("EWroot");
}
Drone.extend(wallEW);

function randEW() {
	for (var i = 0; i < 20; i++) {
		var xCord = Math.floor(Math.random()*15);
		var yCord = Math.floor(Math.random()*7);
		this.chkpt("reset")
			.up(1)
			.right(1)
			.right(xCord)
			.up(yCord)
			.box0("48")
			.move("reset");
	};
};
Drone.extend(randEW);

function wallCorner(){
	this.box0("4",6,15,6)
		.up(15)
		.box0("139",6,1,6)
		.down(1)
		.fwd(1)
		.right(1)
		.box("5",4,1,4)
		.back(1)
		.left(1)
		.down(14);
}
Drone.extend(wallCorner);

function wallNS(){
	this.chkpt("NSroot")
		.box("4",1,8,17)
		.up(8)
		.box("139",1,1,17)
		.down(8)
		.randNS()
		.right(1)
		.up(7)
		.box("5",3,1,17)
		.right(3)
		.down(7)
		.box("4",1,8,17)
		.up(8)
		.box("139",1,1,17)
		.down(8)
		.randNS()
		.move("NSroot");
}
Drone.extend(wallNS);

function randNS() {
	for (var i = 0; i < 20; i++) {
		var xCord = Math.floor(Math.random()*15);
		var yCord = Math.floor(Math.random()*7);
		this.chkpt("reset")
			.up(1)
			.fwd(1)
			.fwd(xCord)
			.up(yCord)
			.box0("48")
			.move("reset");
	};
};
Drone.extend(randNS);

function villageSet(width,depth){
	//This part makes the left corner tower
	this.wallCorner()
		.up(7)
		.fwd(1)
		.right(1)
		.box("5",4,1,4)
		.fwd(3)
		.up(1)
		.ladder(7)
		.right(2)
		.fwd(1)
		.door()
		.right(2)
		.back(2)
		.door()
		.down(8)
		.left(5)
		.back(3)
		.right(6)
		.fwd(1);

	//This part makes the front wall
	for (var i = 0; i < width; i++) {
		this.wallEW()
			.fwd(4)
			.right(4)
			.up(1)
			.door()
			.right(1)
			.ladder(7)
			.down(1)
			.back(4)
			.right(12);
	}
	this.left(3)
		.up(1)
		.door2()
		.down(1)
		.right(3)
		.back(1)
		.down()
		.wallCorner()
		.chkpt("EScorner")
		.up(8)
		.fwd(1)
		.right(1)
		.box("5",4,1,4)
		.up(1)
		.fwd(3)
		.ladder(6)
		.back(1)
		.left(1)
		.door()
		.fwd(2)
		.right(2)
		.door()
		.move("EScorner")
		.left(width*17)
		.left(5)
		.fwd(6)
		.up(1);

	//This part makes the side walls and the streets
	for (var x = 0; x < depth; x++) {
		this.wallNS()
			.right(4)
			.fwd(4)
			.up(1)
			.door()
			.fwd(1)
			.left(1)
			.turn(1)
			.ladder(7)
			.turn(3)
			.down(1)
			.right(2)
			.back(4);
		for (var i = 0; i < width; i++) {
			this.right(1)
				// .box("41",15,2,15)
				.houseSet()
				.right(16);
		};
			this.back(1)
				.wallNS()
				.fwd(4)
				.up(1)
				.door()
				.fwd(2)
				.right(1)
				.turn(3)
				.ladder(7)
				.turn(1)
				.left(1)
				.down(1)
				.back(5)
				.left(width*17)
				.left(5)
				.fwd(16)		
	};
	//This part is the far left tower
	this.left(1)
		.wallCorner()
		.chkpt("NWcorner")
		.up(7)
		.fwd(1)
		.right(1)
		.box("5",4,1,4)
		.up(1)
		.fwd(3)
		.ladder(7)
		.right(4)
		.back(2)
		.door()
		.left(2)
		.back(2)
		.door()
		.move("NWcorner")
		.right(6);

	//This part makes the back wall
	for (var i = 0; i < width; i++) {
		this.wallEW()
			.right(4)
			.up(1)
			.door()
			.right(1)
			.fwd(1)
			.turn(2)
			.ladder(7)
			.turn(2)
			.back(1)
			.down(1)
			.right(12);
	}

	//This part completes the village with the far right tower
	this.wallCorner()
		.up(7)
		.fwd(1)
		.right(1)
		.box("5",4,1,4)
		.up(1)
		.fwd(3)
		.ladder(7)
		.left(1)
		.back(2)
		.door()
		.right(2)
		.back(2)
		.door();

};
Drone.extend(villageSet);