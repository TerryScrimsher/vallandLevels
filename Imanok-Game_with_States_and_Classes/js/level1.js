var level1 = function(game) {

  var map;
  var layer;
  var player;
  var player2;
  var baldy;
  var npc1;
  var npc2;
  
  var exitInn;
  var movementDirection = null;

  var playerX;
  var playerY;

}

level1.prototype = {
  init: function(customParam1, customParam2, customDirection) {
    if (customParam1) {
      playerX = customParam1;
    } else {
      playerX = 1596;
    }
    if (customParam2) {
      playerY = customParam2;
    } else {
      playerY = 1356;
    }
    if (customDirection) {
      playerDirection = customDirection;
    } else {
      playerDirection = "down";
    }
  },
  create: function() {
    
    this.time.advancedTiming = true;

    //Init game physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Background color
    this.game.stage.backgroundColor = '#787878';

    map = this.game.add.tilemap('levelMap1');

    //Adds tilesets to map
    map.addTilesetImage('a_terrain', 'tiles');
    map.addTilesetImage('outside', 'tiles2');
    map.addTilesetImage('house', 'tiles3');
    map.addTilesetImage('water_updated', 'tiles4');

    //Map Collision Between Not Working
    map.setCollisionBetween(0, 10000, true, 'Collision', 'true');

    //Builds out level layers
    layer = map.createLayer('Terrain');
    layer.renderSettings.enableScrollDelta = false;
    layer8 = map.createLayer('Collision');
    layer8.renderSettings.enableScrollDelta = false;
    layer2 = map.createLayer('Underlay');
    layer2.renderSettings.enableScrollDelta = false;

    playerGroup = this.game.add.group();
    gateGroup = this.game.add.group();
    
    npc1 = new NPC(this.game, 1494, 1240, 'Rogue');
		this.game.add.existing(npc1);
    playerGroup.add(npc1);

    npc2 = new NPC(this.game, 2020, 1430, 'Smith');
		this.game.add.existing(npc2);
    playerGroup.add(npc2);
    
    baldy = new walkingNPC(this.game, 2020, 1530, 'Smith');
		this.game.add.existing(baldy);
    playerGroup.add(baldy);
    
    //Gates 
    exit = new Gate(this.game, 1, 1344, 3.2, 64);
    exitPotshop = new Gate(this.game, 1760, 1640, 32, 3.2);
    exitInn = new Gate(this.game, 1376, 1290, 32, 3.2);
    exitBlacksmith = new Gate(this.game, 2272, 1290, 32, 3.2);
    exitItemshop = new Gate(this.game, 2036, 1290, 32, 3.2);
    exitPlayerhouse = new Gate(this.game, 2432, 1640, 32, 3.2);
    exitLodge = new Gate(this.game, 2496, 868, 32, 3.2);
    exitRanch = new Gate(this.game, 640, 262, 32, 3.2);
    
    gateGroup.add(exitInn);
    this.game.physics.arcade.enable(gateGroup);
    
    //Init player to level
    player2 = new Player(this.game, playerX, playerY, playerDirection);
    
		this.game.add.existing(player2);
    playerGroup.add(player2);
    this.game.physics.arcade.enable(playerGroup);
    
    layer9 = map.createLayer('Overlay');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
    layer8.resizeWorld();

    var text2 = this.game.add.bitmapText(40, 30, 'sakredfont', 'Town', 52);
    text2.fixedToCamera = true;
    this.game.add.tween(text2).to( { alpha: 0 }, 4000, "Linear", true, 2000);

  },
  update: function() {
    
    playerGroup.sort('y', Phaser.Group.SORT_ASCENDING);
  
    this.game.physics.arcade.collide(playerGroup, layer8);
    this.game.physics.arcade.collide(playerGroup, playerGroup);
    
    this.game.physics.arcade.collide(playerGroup, exit, this.exitLevel, null, this);
    this.game.physics.arcade.collide(playerGroup, exitPotshop, this.exitPotshop, null, this);
    this.game.physics.arcade.collide(playerGroup, exitInn, this.exitInn, null, this);
    this.game.physics.arcade.collide(playerGroup, exitBlacksmith, this.exitBlacksmith, null, this);
    this.game.physics.arcade.collide(playerGroup, exitPlayerhouse, this.exitPlayerhouse, null, this);
    this.game.physics.arcade.collide(playerGroup, exitItemshop, this.exitItemshop, null, this);
    this.game.physics.arcade.collide(playerGroup, exitLodge, this.exitLodge, null, this);
    this.game.physics.arcade.collide(playerGroup, exitRanch, this.exitRanch, null, this);

  },

  render: function() {
    this.game.debug.body(player2);
    this.game.debug.body(exitInn);
//    this.game.debug.text('Sprite z-depth: ' + player2.z, 10, 20);
    this.game.debug.text('FPS:' + this.game.time.fps, 10, 20);
  },

  exitLevel: function() {
    this.game.state.start("Level2", true, false, 3176, player2.y, "left");
  },
  exitPotshop: function() {
    this.game.state.start("Level1-Potshop", true, false, 801, 940, "up");
  },
  exitInn: function() {
    this.game.state.start("Level1-Inn", true, false, 801, 940, "up");
  },
  exitBlacksmith: function() {
    this.game.state.start("Level1-Blacksmith", true, false, 801, 940, "up");
  },
  exitItemshop: function() {
    this.game.state.start("Level1-Itemshop", true, false, 801, 940, "up");
  },
  exitPlayerhouse: function() {
    this.game.state.start("Level1-Playerhouse", true, false, 801, 940, "up");
  },
  exitLodge: function() {
    this.game.state.start("Level1-Lodge", true, false, 801, 940, "up");
  },
  exitRanch: function() {
    this.game.state.start("Level1-Ranch", true, false, 1154, 940, "up");
  }
  
}

console.log("%cTown", "color:white; background:red");