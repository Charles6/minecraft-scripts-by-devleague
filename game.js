/*global require, command, server, Packages, echo, setTimeout, plugin*/

var utils = require("utils"),
    items = require("items"),
    events = require("events"),
    Canary = Packages.net.canarymod.Canary,
    Location = Packages.net.canarymod.api.world.position.Location;

var arr = [];

// function execCommand( command ){
//     server.executeVanillaCommand(server, command);
// }

// function setupScoreboard2() {
//     execCommand("scoreboard objectives add egghunt dummy Egg Hunt");
//     execCommand("scoreboard objectives setdisplay sidebar egghunt");
//     execCommand("scoreboard teams add red");
//     execCommand("scoreboard teams add yellow");
//     gameData = {
//         playerTeams: {},
//         getPlayerTeams: function (){
//         	var arr = [];
//         	for(var i in this.playerTeams){
//         		arr.push(i);
//         	}
//         	return arr;
//         }
//     };
// };

function setupTeams2() {
    utils.players(function (player) {
    	arr.push(player.name);
        // gameData.playerTeams[player.name] = "cool";
        echo(player, "list "+arr);
    });
};

command("gameOn", function (parameters, player) {
	// setupScoreboard2();
    setupTeams2();
});