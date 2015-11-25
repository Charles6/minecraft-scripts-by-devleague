'use strict'
var Drone = require('drone'),
	blocks = require('blocks');

function bunker(side, height) {

	if (typeof side == 'undefined') {
		side = 10;
	}
	if (typeof height == 'undefined') {
		height = 5;
	}
	this
		.box(blocks.oak, side, 1, side)
		.up(1)
		.box0(blocks.brick.stone, side, height, side)
		.right(side/2)
		.box(blocks.air, 1, 2, 1)
		.left(side/2)
		.fwd(1)
		.right(1)
		.up(height-2)
		.box(blocks.oak, side-2, 1, side-2);
}
Drone.extend(bunker);