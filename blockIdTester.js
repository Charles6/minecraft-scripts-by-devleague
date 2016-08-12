'use strict'
var Drone = require('drone'),
	utils = require('utils'),
	items = require('items'),
	events = require('events'),
  blocks = require('blocks');


function testingCPN(event){
	var person = event.player;
	var targetPos = utils.getMousePos(person);
	var testBlock = utils.blockAt(targetPos);
	echo(person,"Event Works! This is a "+testBlock.typeId);
	//person.inventory.addItem(items.diamondSword());
	if (testBlock.typeId == blocks.stone){
    	echo(event.player,"this is stone");
  	}
}
events.blockRightClick(testingCPN);


function dirttester( event ){
  var block = event.block;
  var person = event.player;
  //var location = block.location;
  //echo(event.player,"test");
  if (block.typeId == blocks.stone){
    echo(event.player,"this is stone");
    person.inventory.addItem(items.egg());
    person.inventory.addItem(items.bread());
  } else {
  	echo(event.player,"This is not stone");
  }
}
events.blockDestroy( dirttester );

