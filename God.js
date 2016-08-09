'use strict'
var events = require('events');

function execCommand( command ){
    server.executeVanillaCommand(server, command);
}

exports.godHand = function(events) {
	execCommand("time set day");
	execCommand("difficulty peaceful");
	execCommand("weather clear");
	execCommand("gamemode c @a")
};

exports.setGameObj = function(events){
	execCommand("scoreboard objectives add Eliminations playerKillCount");
	execCommand("scoreboard objectives setdisplay sidebar Eliminations");
	execCommand("scoreboard objectives add wipeout deathCount");
	execCommand("scoreboard objectives setdisplay list wipeout");
};

exports.setBlue = function(events){
	execCommand("scoreboard teams add blue");
	execCommand("scoreboard teams option blue color blue");
	execCommand("scoreboard teams option blue friendlyfire false");
};

exports.setRed = function(events){
	execCommand("scoreboard teams add red");
	execCommand("scoreboard teams option red color red");
	execCommand("scoreboard teams option red friendlyfire false");
};

exports.setYellow = function(events){
	execCommand("scoreboard teams add yellow");
	execCommand("scoreboard teams option yellow color yellow");
	execCommand("scoreboard teams option yellow friendlyfire false");
};

exports.setGreen = function(events){
	execCommand("scoreboard teams add green");
	execCommand("scoreboard teams option green color green");
	execCommand("scoreboard teams option green friendlyfire false");
};

exports.setOrange = function(events){
	execCommand("scoreboard teams add orange");
	execCommand("scoreboard teams option orange color gold");
	execCommand("scoreboard teams option orange friendlyfire false");
};








