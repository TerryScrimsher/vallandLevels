var level1itemshop = function(game) {

  var map;
  var layer;
  var player;
  var player2;
  var baldy;
  var movementDirection = null;

  var playerX;
  var playerY;

  //var text1;
}

level1itemshop.prototype = {
  init: function(customParam1, customParam2, customDirection) {
    if (customParam1) {
      playerX = customParam1;
    } else {
      playerX = 300;
    }
    if (customParam2) {
      playerY = customParam2;
    } else {
      playerY = 300;
    }
    if (customDirection) {
      playerDirection = customDirection;
    } else {
      playerDirection = "down";
    }
  },
  create: function() {

    //Init game physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Background color
    this.game.stage.backgroundColor = '#354149';

    map = this.game.add.tilemap('levelMap1-itemshop');

    //Adds tilesets to map
//    map.addTilesetImage('a_terrain', 'tiles');
//    map.addTilesetImage('outside', 'tiles2');
//    map.addTilesetImage('house', 'tiles3');
//    map.addTilesetImage('water_updated', 'tiles4');
    map.addTilesetImage('inside', 'tiles6');
    map.addTilesetImage('inside_ceilingborders_updated', 'tiles7');
    map.addTilesetImage('tiles_kitchen', 'tiles8');

    //Map Collision Between Not Working
    map.setCollisionBetween(0, 10000, true, 'Collision', 'true');
    map.setCollisionBetween(0, 10000, true, 'Objects', 'true');

    //Builds out level layers
    layer = map.createLayer('Floor');
    layer8 = map.createLayer('Collision');
    layer11 = map.createLayer('Objects');
    
    npcGroup = this.game.add.group();
    playerGroup = this.game.add.group();

    npc1 = this.game.add.sprite(776, 662, 'emoteSprite', 1);
    npc1.animations.add('emoteSprite', [30, 31, 32, 31]);
    npc1.animations.play('emoteSprite', 8, true);
    this.game.physics.arcade.enable(npc1);
    npc1.body.immovable = true;

    //Exit: Potionshop    
    exitPotshop = this.game.add.sprite(767, 1020);
    this.game.physics.arcade.enable(exitPotshop);
    exitPotshop.body.immovable = true;
    exitPotshop.scale.x = 2;
    exitPotshop.scale.y = .1;

    //Init player to level
    player2 = new Player(this.game, playerX, playerY, playerDirection);
    
		this.game.add.existing(player2);
    playerGroup.add(player2);
    this.game.physics.arcade.enable(playerGroup);

    layer9 = map.createLayer('Overlay');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
    layer8.resizeWorld();

    //    var text1 = game.add.bitmapText(((window.innerWidth * window.devicePixelRatio)/2)-4, ((window.innerHeight * window.devicePixelRatio)/2)-20, 'sakredfont', 'Player', 24);
    //    text1.fixedToCamera = true;
    var text2 = this.game.add.bitmapText(60, 60, 'sakredfont', 'Valland: Item Shop', 52);
    text2.fixedToCamera = true;
    this.game.add.tween(text2).to( { alpha: 0 }, 4000, "Linear", true, 2000);
    var text3 = this.game.add.bitmapText(90, 160, 'quirkfont', 'W/A/S/D to Move\nL = Laugh\nO = Surprised\nY = Yes\nN = No\nT = Teleport', 30);
    text3.fixedToCamera = true;

  },
  update: function() {

    this.game.physics.arcade.collide(playerGroup, npc1);
    this.game.physics.arcade.collide(playerGroup, layer8);
    this.game.physics.arcade.collide(playerGroup, layer11);

    this.game.physics.arcade.collide(playerGroup, exitPotshop, this.exitLevel, null, this);

  },

  render: function() {
//        this.game.debug.body(player);
//        this.game.debug.body(exitPotshop);
  },

  exitLevel: function() {
    this.game.state.start("Level1", true, false, 2007, 1272, "down");
  }

}

console.log("%cTown: Itemshop", "color:white; background:red");