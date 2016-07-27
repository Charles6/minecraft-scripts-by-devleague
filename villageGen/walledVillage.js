'use strict';
var Drone = require('drone'),
	blocks = require('blocks');

function wallEW() {
	this.box("98",13,6,1)
		.up(6)
		.box("139",13,1,1)
		.down(6);
}
Drone.extend(wallEW);

function wallCorner(){
	this.box0("98",3,10,3);
}
Drone.extend(wallCorner);

function wallNS(){
	this.box("98",1,6,13)
		.up(6)
		.box("139",1,1,13)
		.down(6);
}
Drone.extend(wallNS);

function streetEW(){
	this.box("173",14,1,1)
		.fwd(1)
		.box("41",13,1,1)
		.fwd(1)
		.box("173",11,1,1);
}
Drone.extend(streetEW);

function streetNS(){
	this.box("173",1,1,12)
		.right(1)
		.box("41",1,1,12)
		.right(1)
		.box("173",1,1,12);
};
Drone.extend(streetNS);

function villageSet(width,depth){
	//This part makes the left corner tower
	this.wallCorner()
		.right(3)
		.fwd(2);

	//This part makes the front wall
	for (var i = 0; i < width; i++) {
		this.wallEW()
			.right(13);
	}
	this.left(3)
		.up(1)
		.door2()
		.down(1)
		.right(3)
		.back(2)
		.wallCorner()
		.left(width*13+3)
		.fwd(3)
		.right(2)
		.wallNS();

	//This part makes the side walls and the streets
	for (var x = 0; x < depth; x++) {
		this.wallNS();
		for (var i = 0; i < width; i++) {
			this.streetEW()
				.back(2)
				.right(1)
				.fwd(3)
				.houseSet()
				.back(3)
				.right(10)
				.fwd(2)
				.streetNS()
				.back(2);
		}
			this.right(1)
				.wallNS()
				.left(width*13+1)
				.fwd(13);
				
	};

	//This part is the far left tower
	this.left(2)
		.wallCorner()
		.right(3);

	//This part makes the back wall
	for (var i = 0; i < width; i++) {
		this.wallEW()
			.right(13);
	}

	//This part completes the village with the far right tower
	this.wallCorner();

};
Drone.extend(villageSet);