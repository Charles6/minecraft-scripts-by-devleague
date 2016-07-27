'use strict'
var Drone = require('drone'),
    blocks = require('blocks');

var blockArr = [];
var locArr = [];
var count = 0;

function tester( event ){
  var block = event.block;
  var location = block.location;
  echo(event.player,"You broke "+block.typeId);
  blockArr[count] = block.typeId;
  locArr[count] = location;
  count++;
};
events.blockDestroy( tester );

function rebuild(){
	for (var i = blockArr.length - 1; i >= 0; i--) {
		new Drone(locArr[i]).box(blockArr[i]);
	}

	while(blockArr.length > 0) {
    	blockArr.pop();
	}
	while(locArr.length > 0) {
    	locArr.pop();
	}
}
Drone.extend(rebuild);
