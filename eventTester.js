'use strict'
var Drone = require('drone'),
	utils = require('utils'),
	items = require('items'),
	events = require('events'),
    blocks = require('blocks');

var arrL = [];

function namesList() {
    utils.players(function (player) {
    	arrL.push(player.name);
        // gameData.playerTeams[player.name] = "cool";
        echo(player, "list "+arrL);
    });
};

command("listAll", function (parameters, player) {
	// setupScoreboard2();
    namesList();
});






var magicEgg = items.egg(1);

magicEgg.setDisplayName("Lightning_Egg");


function execCommand( command ){
    server.executeVanillaCommand(server, command);
}

function magicWords( event ){
	var person = event.player;
	// echo(person,event.message);
	if (event.message == "abracadabra") {
		execCommand("title @p title {text:'Magic Happens'}");
		person.inventory.addItem(magicEgg);
	};
	if (event.message == "listCharles") {
		// echo(person, "Charles List");
		person.inventory.addItem(items.bread());
	}
};
events.chat( magicWords );


function tester45(event){
	var person = event.player;
	echo(person,"Good Shot!");
}
events.projectileHit(tester45);


function armWave(event){
	var person = event.player;
	// echo(person,"Lightning");
	// execCommand("title @a title {text:'I am Thor!'}");
	var targetPos = utils.getMousePos(person);
	if (person.inventory.itemInHand.displayName == "Lightning_Egg"){
		for (var i = 0; i < 4; i++) {
			// new Drone(targetPos).left(15).box("3",10,10,10);
			targetPos.world.makeLightningBolt(targetPos);
		};
	};
};
events.playerArmSwing(armWave);

