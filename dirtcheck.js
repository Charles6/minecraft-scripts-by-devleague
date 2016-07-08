'use strict'
var Drone = require('drone'),
    blocks = require('blocks');



function tester( event ){
  var block = event.block;
  var location = block.location;
  echo(event.player,"test");
  if (block.typeId === blocks.dirt){
    echo(event.player,"this is dirt");
  }
  new Drone(location).box(blocks.dirt);
}
events.blockDestroy( tester );