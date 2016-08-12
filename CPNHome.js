'use strict';
var Drone = require('drone'),
	utils = require('utils'),
	items = require('items'),
	events = require('events'),
    blocks = require('blocks');

function urbanFarm() {
	this.chkpt("UF")
		.box("5",8,1,8)
		.up(1)
		.box0("45",8,6,8)
		.right(3)
		.door2()
		.left(2)
		.fwd(2)
		.box(blocks.chest,2,1,1)
		.right(4)
		.box(blocks.chest,2,1,1)
		.left(4)
		.fwd(2)
		.box(blocks.chest,2,1,1)
		.right(4)
		.box(blocks.chest,2,1,1)
		.left(4)
		.fwd(2)
		.box(blocks.chest,2,1,1)
		.right(4)
		.box(blocks.chest,2,1,1)
		.left(5)
		.back(6)
		.up(4)
		.fwd(1)
		.right(1)
		.box("1",6,1,6)
		.down(4)
		.fwd(5)
		.right(3)
		.ladder(6)
		.left(4)
		.back(6)
		.up(5)
		.fwd(6)
		.right(5)
		.box("4",2,1,1)
		.up(1)
		.box(blocks.furnace,2,1,1)
		.right(1)
		.back(3)
		.down(1)
		.box(blocks.crafting_table)
		.move("UF")
		.up(6);
};
Drone.extend(urbanFarm);

function farmLand() {
	this.chkpt("farmStart")
		.box(blocks.wood,1,5,1)
		.right(7)
		.box(blocks.wood,1,5,1)
		.fwd(7)
		.box(blocks.wood,1,5,1)
		.left(7)
		.box(blocks.wood,1,5,1)
		.right(1)
		.box("5",1,5,1)
		.left(1)
		.back(7)
		.up(3)
		.box("5",8,1,8)
		.fwd(1)
		.right(1)
		.box("89",6,1,6)
		.back(1)
		.left(1)
		.up(1)
		.box0("5",8,1,6)
		.right(1)
		.fwd(1)
		.randFarm()
		.move("farmStart")
		.fwd(7)
		.right(1)
		.ladder(5)
		.move("farmStart")
		.up(5);
};
Drone.extend(farmLand);

function wheatFarm(){
	for (var i = 0; i < 3; i++) {
		this.box("60",1,1,4)
			.up(1)
			.box("59",1,1,4)
			.down(1)
			.right(1)
			.box("9",1,1,4)
			.right(1);
	}
}
Drone.extend(wheatFarm);

function potatoFarm(){
	for (var i = 0; i < 3; i++) {
		this.box("60",1,1,4)
			.up(1)
			.box("142",1,1,4)
			.down(1)
			.right(1)
			.box("9",1,1,4)
			.right(1);
	}
}
Drone.extend(potatoFarm);

function pumpkinFarm(){
	for (var i = 0; i < 2; i++) {
		this.box("9",1,1,4)
			.right(1)
			.box("60",2,1,4)
			.up(1)
			.box("104",1,1,4)
			.down(1)
			.right(2);
	}
}
Drone.extend(pumpkinFarm);

function randFarm(){
	var randNum = Math.floor(Math.random()*4);
	switch(randNum) {
	    case 0:
	        this.pumpkinFarm();
	        break;
	    case 1:
	        this.potatoFarm();
	        break;
	    default:
	    	this.wheatFarm();
	        break;
	};
};
Drone.extend(randFarm);


var farmNum = 2;

function farmSet(){
	this.chkpt("farmCHK")
		.fwd(3)
		.right(3)
		.urbanFarm();

	var farmNum = Math.floor(Math.random()*6)+1
	for (var i = 0; i < farmNum; i++) {
		this.farmLand();
	};
	this.move("farmCHK");
};
Drone.extend(farmSet);



function cowFarm(){
	var person = event.player;
	var targetPos = utils.getMousePos(person);
	new Drone(targetPos).up(1)
	// this.up(1)
		.box0("85",10,1,10)
		.right(3)
		.box("107")
		.fwd(3);
	// setTimeout(function() {
	// 	new Drone(targetPos).spawn("Cow")
	// 		.right(1)
	// 		.spawn("Cow");
	// }, 1000);

};
Drone.extend(cowFarm);

function tester45(event){
	var person = event.player;
	echo(person,"Good Shot!");
}
events.projectileHit(tester45);