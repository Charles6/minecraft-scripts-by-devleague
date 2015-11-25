'use strict'
var Drone = require('drone'),
	blocks = require('blocks');

function bunkerloop(side, height, number) {
	var i;
	if (typeof side == 'undefined') {
		side = 10;
	}
	if (typeof height == 'undefined') {
		height = 5;
	}
	if (typeof number == 'undefined') {
		number = 3;
	}

  	for (i = 0; i < number; i++ ){
		this
			.box(blocks.oak, side, 1, side)
			.up(1)
			.box0(blocks.brick.stone, side, height, side)
			.right(side/2)
			.box('0', 1, 2, 1)
			.left(side/2)
			.fwd(1)
			.right(1)
			.up(height-2)
			.box(blocks.oak, side-2, 1, side-2)
			.back(1)
			.down(height-1)
			.left(1)
			.up(height+1);
			//.right(side+4);
	}
};
Drone.extend(bunkerloop);