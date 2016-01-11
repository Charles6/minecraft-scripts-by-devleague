'use strict';
var Drone= require('drone'),
	blocks= require('blocks');

function tower (side,height){
	if(typeof side =='undefined'){
		side=6;
	}

	if(typeof height =='undefined'){
		height=10;
	}

	this 
		.box0(blocks.brick.stone,side,height,side)
		.fwd(1)
		.right(1)
		.up(height-2)
		.box('5',side-2,1,side-2);
}

Drone.extend(tower);