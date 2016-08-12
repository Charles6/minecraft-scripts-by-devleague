/*global require, server, Packages*/

//This is an addition to the exploding arrow mod to add an ability to spawn chickens where your arrow lands.

var items = require("items"),
    recipes = require("recipes"),
    events = require("events");

var bow = items.bow(1),
    tnt = items.tnt(1),
    egg = items.egg(1),
    explodeBow = items.bow(1),
    nuclearBow = items.bow(1),
    chickenBow = items.bow(1),
    cmArrow = Packages.net.canarymod.api.entity.Arrow,
    EXPLOSIVE_YIELD = 2.5,
    NUCLEAR_YIELD = 10;

chickenBow.setDisplayName("Chicken Shooter");
chickenBow.setLore("This Bow shoots chickens.");

var chickenBowRecipe = recipes.create({
    result: chickenBow,
    ingredients: {
        B: bow,
        E: egg
    },
    shape: [
        "   ",
        "EBE",
        "   "
    ]
});

server.addRecipe(chickenBowRecipe);

explodeBow.setDisplayName("Bow of Exploding");
explodeBow.setLore("Excite. Very boom.");

var explodeBowRecipe = recipes.create({
    result: explodeBow,
    ingredients: {
        B: bow,
        T: tnt
    },
    shape: [
        "   ",
        "BT ",
        "   "
    ]
});

server.addRecipe(explodeBowRecipe);


nuclearBow.setDisplayName("Nuclear Bow");
nuclearBow.setLore("The only way to win is to not play the game.");

var nuclearBowRecipe = recipes.create({
    result: nuclearBow,
    ingredients: {
        B: bow,
        T: tnt
    },
    shape: [
        "   ",
        "TBT",
        "   "
    ]
});

server.addRecipe(nuclearBowRecipe);

function onArrowHit(event) {
    var projectile = event.projectile,
        world = projectile.world,
        loc = projectile.location,
        shooter = projectile.owner;
    var person = event.player;
    // echo(person,"Good Shot!");
    
    if (projectile instanceof cmArrow) {
        if (shooter.inventory.itemInHand.getDisplayName() === "Bow of Exploding") {
            projectile.destroy();
            world.makeExplosion(shooter, loc, EXPLOSIVE_YIELD, true);
        } else if (shooter.inventory.itemInHand.getDisplayName() === "Nuclear Bow") {
            projectile.destroy();
            world.makeExplosion(shooter, loc, NUCLEAR_YIELD, true);
        } else if (shooter.inventory.itemInHand.getDisplayName() === "Chicken Shooter") {
        	projectile.destroy();
        	new Drone(loc).spawn("chicken");
            echo(person,"Good Shot!");
        }
    }
}

events.projectileHit(onArrowHit);