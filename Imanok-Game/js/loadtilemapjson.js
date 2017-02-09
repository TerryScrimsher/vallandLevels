
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render});

//Global variables
var playerCharacterSpritesheet = "img/chara2.png";
var emoteSpritesheet = "img/emote2.png";

function preload() {

    //Loads level json data
    game.load.tilemap('levelMap', 'js/valland-town-update.json', null, Phaser.Tilemap.TILED_JSON);

    //Loads level tilesets
    game.load.image('tiles', 'img/a_terrain.png');
    game.load.image('tiles2', 'img/outside.png');
    game.load.image('tiles3', 'img/house.png');
    game.load.image('tiles4', 'img/water_updated.png');
  
    //Load player spritesheet
    game.load.spritesheet('playerSprite', playerCharacterSpritesheet, 52, 74, 70);
    
    //Load emote spritesheet
    game.load.spritesheet('emoteSprite', emoteSpritesheet, 52, 72, 70);

}

var map;
var layer;
var player;
var movementDirection = null;

function create() {

    //Init game physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
  
    //Background color
    game.stage.backgroundColor = '#787878';

    map = game.add.tilemap('levelMap');

    //Adds tilesets to map
    map.addTilesetImage('a_terrain', 'tiles');
    map.addTilesetImage('outside', 'tiles2');
    map.addTilesetImage('house', 'tiles3');
    map.addTilesetImage('water_updated', 'tiles4');
    
    //Map Collision Between Not Working
    map.setCollisionBetween(0, 6000, true, 'Collision', 'true');
  
    //Builds out level layers
    layer = map.createLayer('Terrain');
    layer8 = map.createLayer('Collision');
    layer2 = map.createLayer('Underlay');
  
    npc1 = game.add.sprite(1494, 1240, 'emoteSprite', 1);
    npc1.animations.add('emoteSprite', [30, 31, 32, 31]);
    npc1.animations.play('emoteSprite', 8, true);
    game.physics.arcade.enable(npc1);
    npc1.body.immovable = true;
    
    npc2 = game.add.sprite(2020, 1430, 'emoteSprite', 1);
    npc2.animations.add('emoteSprite', [66, 67, 68, 67]);
    npc2.animations.play('emoteSprite', 4, true);
    game.physics.arcade.enable(npc2);
    npc2.body.immovable = true;

    //Init player to level
    createPlayer();
    player.body.setSize(29, 28, 11, 44);
  
  
    layer9 = map.createLayer('Overlay');
  
    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
    layer8.resizeWorld();
}

function update() {
  
    game.physics.arcade.collide(player, npc1);
    game.physics.arcade.collide(player, npc2);
    game.physics.arcade.collide(player, layer8);
  
    player.body.velocity.y = 0;
    player.body.velocity.x = 0;
  
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        if (movementDirection != "left") {
            moveLeft();
        }
        player.body.velocity.x -= 400;
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
            player.body.velocity.y -= 400;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {   
            player.body.velocity.y += 400;
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        if (movementDirection != "right") {
            moveRight();
        }
        player.body.velocity.x += 400;
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
           player.body.velocity.y -= 400;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {   
            player.body.velocity.y += 400;
        }
        
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        if (movementDirection != "up") {
            moveUp();
        }
        player.body.velocity.y -= 400;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {   
        if (movementDirection != "down") {
            moveDown();
        }
        player.body.velocity.y += 400;
    } else {
        
        if (movementDirection == "up") {
            standStillUp();
            movementDirection = null;
        }
        if (movementDirection == "down") {
            standStillDown();
            movementDirection = null;
        }
        if (movementDirection == "left") {
            standStillLeft();
            movementDirection = null;
        }
        if (movementDirection == "right") {
            standStillRight();
            movementDirection = null;
        } 
    }
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.L)) {
        playerLaugh();
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.O)) {
        playerShock();
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.N)) {
        playerNo();
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.Y)) {
        playerYes();
    }
}

function render() {
//    game.debug.body(player);
}

function createPlayer () {
    player = game.add.sprite(52, 74, 'playerSprite', 10);
    player.x = 1570;
    player.y = 1330;
    game.physics.arcade.enable(player);
    game.camera.follow(player);
    player.body.collideWorldBounds = true;
    player.body.linearDamping = 1;
}

function standStillUp () {
    player.loadTexture('playerSprite', 46);
}
function standStillDown () {
    player.loadTexture('playerSprite', 10);
}
function standStillLeft () {
    player.loadTexture('playerSprite', 22);
}
function standStillRight () {
    player.loadTexture('playerSprite', 34);
}

function moveUp () {
    movementDirection = "up";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [45, 46, 47, 46]);
    player.animations.play('playerSprite', 5, true);
}
function moveDown () {
    movementDirection = "down";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [9, 10, 11, 10]);
    player.animations.play('playerSprite', 5, true);
}
function moveLeft () {
    movementDirection = "left";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [21, 22, 23, 22]);
    player.animations.play('playerSprite', 5, true);
}
function moveRight () {
    movementDirection = "right";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [33, 34, 35, 34]);
    player.animations.play('playerSprite', 5, true);
}

function playerLaugh () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [33, 34, 35, 34]);
    player.animations.play('emoteSprite', 8, true);
}
function playerNo () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [21, 22, 23, 22]);
    player.animations.play('emoteSprite', 8, true);
}
function playerYes () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [9, 10, 11, 10]);
    player.animations.play('emoteSprite', 8, true);
}
function playerShock () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [45, 46, 47, 46]);
    player.animations.play('emoteSprite', 8, true);
}