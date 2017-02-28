var level2 = function(game) {

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

level2.prototype = {
  init: function(customParam1, customParam2, customDirection) {
    if (customParam1) {
      playerX = customParam1;
    } else {
      playerX = 1525;
    }
    if (customParam2) {
      playerY = customParam2;
    } else {
      playerY = 1330;
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
    this.game.stage.backgroundColor = '#787878';

    map = this.game.add.tilemap('levelMap2');

    //Adds tilesets to map
    map.addTilesetImage('a_terrain', 'tiles');
    map.addTilesetImage('outside', 'tiles2');
    map.addTilesetImage('house', 'tiles3');
    map.addTilesetImage('water_updated', 'tiles4');
    map.addTilesetImage('castle', 'tiles5');

    //Map Collision Between Not Working
    map.setCollisionBetween(0, 10000, true, 'Collision', 'true');

    //Builds out level layers
    layer = map.createLayer('Terrain');
    layer8 = map.createLayer('Collision');
    layer2 = map.createLayer('Underlay');
    
    npcGroup = this.game.add.group();
    playerGroup = this.game.add.group();

    //Exit
    exit = this.game.add.sprite(3196, 1344);
    this.game.physics.arcade.enable(exit);
    exit.body.immovable = true;
    exit.scale.x = .1;
    exit.scale.y = 2;

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
    var text2 = this.game.add.bitmapText(60, 60, 'sakredfont', 'Valland: Graveyard', 52);
    text2.fixedToCamera = true;
    var text3 = this.game.add.bitmapText(90, 160, 'quirkfont', 'W/A/S/D to Move\nL = Laugh\nO = Surprised\nY = Yes\nN = No\nT = Teleport', 30);
    text3.fixedToCamera = true;

  },

  update: function() {

    this.game.physics.arcade.collide(playerGroup, layer8);

    this.game.physics.arcade.collide(playerGroup, exit, this.exitLevel, null, this);

  },

  render: function() {
    //    this.game.debug.body(player);
    //    this.game.debug.body(exit);
  },

  exitLevel: function() {
    this.game.state.start("Level1", true, false, 1, player2.y, "right");
  }

}

console.log("%cGraveyard", "color:white; background:red");