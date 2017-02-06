
var game = new Phaser.Game(3000, 3000, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  Tilemaps are split into two parts: The actual map data (usually stored in a CSV or JSON file) 
    //  and the tileset/s used to render the map.

    //  Here we'll load the tilemap data. The first parameter is a unique key for the map data.

    //  The second is a URL to the JSON file the map data is stored in. This is actually optional, you can pass the JSON object as the 3rd
    //  parameter if you already have it loaded (maybe via a 3rd party source or pre-generated). In which case pass 'null' as the URL and
    //  the JSON object as the 3rd parameter.

    //  The final one tells Phaser the foramt of the map data, in this case it's a JSON file exported from the Tiled map editor.
    //  This could be Phaser.Tilemap.CSV too.

    game.load.tilemap('levelMap', 'js/valland-town5.json', null, Phaser.Tilemap.TILED_JSON);

    //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

    game.load.image('tiles', 'img/a_terrain.png');
    game.load.image('tiles2', 'img/outside.png');
    game.load.image('tiles3', 'img/house.png');
    game.load.image('tiles4', 'img/water_updated.png');

}

var map;
var layer;

function create() {

    game.stage.backgroundColor = '#787878';

    //  The 'mario' key here is the Loader key given in game.load.tilemap
    map = game.add.tilemap('levelMap');

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('a_terrain', 'tiles');
    map.addTilesetImage('outside', 'tiles2');
    map.addTilesetImage('house', 'tiles3');
    map.addTilesetImage('water_updated', 'tiles4');
    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('Terrain');
    layer1 = map.createLayer('Water');
    layer2 = map.createLayer('Bridges');
    layer3 = map.createLayer('Objects');
    layer4 = map.createLayer('Fences');
    layer5 = map.createLayer('Buildings');
    layer6 = map.createLayer('Trees');
    layer7 = map.createLayer('Signs');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();

}
