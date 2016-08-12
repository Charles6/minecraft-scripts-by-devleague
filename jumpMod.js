'use strict'
var Drone = require('drone'),
  utils = require('utils'),
  items = require('items'),
  events = require('events'),
  blocks = require('blocks');

var jump = 0;
function gottaGoFast(event){
	var person = event.player;

	var targetPos = utils.getMousePos(person);
	if (jump > 1) {
		jump = 0;
		echo(person,"no more bonus jumps");

	} else {
		person.motionY = 1;
		echo(person,"bonus jump "+jump);
		jump++;
	};
	//teleport(person, targetPos);
}
events.playerArmSwing(gottaGoFast);





