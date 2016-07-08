/*global require, server, Packages*/

var items = require("items"),
    recipes = require("recipes"),
    events = require("events");

var water = items.waterBucket(1),
    wheat = items.wheat(1),
    egg = items.egg(1),
    pasta = items.string(1);

pasta.setDisplayName("pasta");
pasta.setLore("PASTA!!!!!");

var pastaRecipe = recipes.create({
    result: pasta,
    ingredients: {
        W: water,
        H: wheat,
        E: egg
    },
    shape: [
        "W  ",
        " H ",
        "  E"
    ]
});

server.addRecipe(pastaRecipe);