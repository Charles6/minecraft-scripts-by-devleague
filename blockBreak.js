/*global require, server, Packages*/
var items = require('items');

function blockDestroy( event ){
  var luck = Math.floor(Math.random()*10);

  if (luck == 1){
  	self.inventory.addItem(items.cake(1));
  }

  else if (luck == 2){
  	self.inventory.addItem(items.milkBucket(1));
  }

  else {
    self.inventory.addItem(items.cookie(1));
  };

}
events.blockDestroy( blockDestroy );

