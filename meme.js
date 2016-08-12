'use strict'
var Drone = require('drone'),
	utils = require('utils'),
	items = require('items'),
	events = require('events'),
    blocks = require('blocks');

function pepe() {
	this.box(blocks.wool.blue,6,1,1)
		.box(blocks.wool.blue,1,1,3)
		.fwd(1)
		.right(1)
		.box(blocks.wool.green,5,1,1)
		.fwd(1)
		.box(blocks.wool.green,6,1,4)
		.right(1)
		.box(blocks.wool.red,5,1,1)
		.fwd(2)
		.box(blocks.wool.white)
		.right(1)
		.box(blocks.wool.black)
		.right(2)
		.box(blocks.wool.white)
		.right(1)
		.box(blocks.wool.black)
		.left(6)
		.back(1)
		.box(blocks.wool.green,1,1,3)
		.fwd(3)
		.right(1)
		.box(blocks.wool.green,2,1,1)
		.right(4)
		.box(blocks.wool.green,2,1,1);

};
Drone.extend(pepe);