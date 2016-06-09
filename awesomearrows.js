'use strict';
var Drone = require('drone'),
	blocks = require('blocks');

function awesomeArrows(event){
	var projectile = event.projectile,
		world = projectile.world,
		shooter = projectile.owner,
		cmArrow = Packages.net.canarymod.api.entity.Arrow,
		cmPlayer = Packages.net.canarymod.api.entity.living.humanoid.Player,
		loc = projectile.location;

	if (projectile instanceof cmArrow && shooter instanceof cmPlayer){
		projectile.destroy();
		new Drone(loc)
			.tower();
	}
}
events.projectileHit(awesomeArrows);