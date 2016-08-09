'use strict';
var Drone= require('drone'),
	blocks= require('blocks');



var colorArr = [
	blocks.wool.red,
	blocks.wool.orange,
	blocks.wool.yellow,
	blocks.wool.green,
	blocks.wool.blue,
	blocks.wool.purple
];


function colorSet(number) {
	for (var i = 0; i < number; i++) {
		var randColor = Math.floor(Math.random()*colorArr.length);
		this.box(colorArr[randColor],1,10,1)
			.right(1);
	}
}
Drone.extend(colorSet);