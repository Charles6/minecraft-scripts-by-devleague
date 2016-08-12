'use strict';
var Drone = require('drone'),
	blocks = require('blocks');

function looping() {
	this.box("48",10,1,10);
	for (var i = 0; i < 15; i++) {
		var xCord = Math.floor(Math.random()*8);
		var yCord = Math.floor(Math.random()*8);
		this.chkpt("reset")
			.fwd(1)
			.right(1)
			.right(xCord)
			.up(yCord)
			.box0("0")
			.move("reset");
	};
};
Drone.extend(looping);