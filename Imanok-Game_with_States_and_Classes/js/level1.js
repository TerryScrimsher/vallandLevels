var level1 = function(game) {

  var map;
  var layer;
  
  var player1, player2;
  var baldy, npc1, npc2, fox1, bunny1;
  var exitWest, exitPotshop, exitInn, exitBlacksmith, exitItemshop, exitPlayerhouse, exitLodge, exitRanch;
  var bullets, bullet;
  
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
    //Map Collision Between
    map.setCollisionBetween(0, 10000, true, 'Collision', 'true');

    //Builds out level layers
    layer = map.createLayer('Terrain');
    layer.renderSettings.enableScrollDelta = false;
    collisionlayer = map.createLayer('Collision');
    collisionlayer.renderSettings.enableScrollDelta = false;
    layer2 = map.createLayer('Underlay');
    layer2.renderSettings.enableScrollDelta = false;

    //Create Groups
    playerGroup = this.game.add.group();
    npcGroup = this.game.add.group();
    
    //Create NPCs
    npc = new NPC(this.game, 1494, 1240, 'Rogue');
		this.game.add.existing(npc);
    npcGroup.add(npc);

    npc = new NPC(this.game, 2020, 1430, 'Smith');
		this.game.add.existing(npc);
    npcGroup.add(npc);
    
    npc = new walkingNPC(this.game, 2020, 1530, 'Smith');
		this.game.add.existing(npc);
    npcGroup.add(npc);
    
    npc = new walkingNPC(this.game, 1620, 1030, 'Smith');
		this.game.add.existing(npc);
    npcGroup.add(npc);
    
    npc = new walkingNPC(this.game, 820, 800, 'Smith');
		this.game.add.existing(npc);
    npcGroup.add(npc);
    
    fox1 = new walkingAnimal(this.game, 1020, 1530, 'fox');
		this.game.add.existing(fox1);
    playerGroup.add(fox1);
    
    fox2 = new walkingAnimal(this.game, 820, 700, 'fox');
		this.game.add.existing(fox2);
    playerGroup.add(fox2);
    
    bunny1 = new walkingAnimal(this.game, 1000, 1480, 'bunny');
		this.game.add.existing(bunny1);
    playerGroup.add(bunny1);
    
    bunny2 = new walkingAnimal(this.game, 920, 300, 'bunny');
		this.game.add.existing(bunny2);
    playerGroup.add(bunny2);
    
    //Init player to level
    player1 = new Player(this.game, playerX, playerY, playerDirection);
    
		this.game.add.existing(player1);
    playerGroup.add(player1);
    this.game.physics.arcade.enable(playerGroup);
    
    //Create Gates 
    exitWest = new Gate(this.game, 1, 1344, 3.2, 64);
    exitPotshop = new Gate(this.game, 1760, 1640, 32, 3.2);
    exitInn = new Gate(this.game, 1376, 1290, 32, 3.2);
    exitBlacksmith = new Gate(this.game, 2272, 1290, 32, 3.2);
    exitItemshop = new Gate(this.game, 2016, 1290, 32, 3.2);
    exitPlayerhouse = new Gate(this.game, 2432, 1640, 32, 3.2);
    exitLodge = new Gate(this.game, 2496, 868, 32, 3.2);
    exitRanch = new Gate(this.game, 640, 262, 32, 3.2);

    //Create Overlay Layer
    layer9 = map.createLayer('Overlay');

    //Resizes the game world to match the layer dimensions
    layer.resizeWorld();

    //Hud & Text Elements
    var text2 = this.game.add.bitmapText(40, 30, 'sakredfont', 'Town', 52);
    text2.fixedToCamera = true;
    this.game.add.tween(text2).to( { alpha: 0 }, 4000, "Linear", true, 2000);
    
    this.nextFire = 0;
    this.fireRate = 100;
    nextFire = this.game.add.group();
    fireRate = this.game.add.group();

  },
  update: function() {
    
    playerGroup.sort('y', Phaser.Group.SORT_ASCENDING);
  
    this.game.physics.arcade.collide(playerGroup, collisionlayer);
    this.game.physics.arcade.collide(playerGroup, playerGroup);
//    this.game.physics.arcade.collide(npcGroup, playerGroup);
    this.game.physics.arcade.collide(npcGroup, collisionlayer);
    
    this.game.physics.arcade.collide(player1, npcGroup, function(player, npc){npc.kill()}); 
//    this.player1.body.collides(this.enemyCG, this.killEnemy, this);
 
    this.game.physics.arcade.collide(player1, exitWest, function(){exitPoint(this.game, "Level2", 3176, player1.y, "left")}, null, this);
    this.game.physics.arcade.collide(player1, exitPotshop, function(){exitPoint(this.game, "Level1-Potshop", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitInn, function(){exitPoint(this.game, "Level1-Inn", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitBlacksmith, function(){exitPoint(this.game, "Level1-Blacksmith", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitPlayerhouse, function(){exitPoint(this.game, "Level1-Playerhouse", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitItemshop, function(){exitPoint(this.game, "Level1-Itemshop", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitLodge, function(){exitPoint(this.game, "Level1-Lodge", 801, 940, "up")}, null, this);
    this.game.physics.arcade.collide(player1, exitRanch, function(){exitPoint(this.game, "Level1-Ranch", 1154, 940, "up")}, null, this);

  },
  render: function() {
//    this.game.debug.body(bullets);
//    this.game.debug.body(bullet);

//    this.game.debug.text('Sprite z-depth: ' + player1.z, 10, 20);
//    this.game.debug.text('FPS:' + this.game.time.fps, 10, 20);
//      this.game.debug.text('Time:' + this.game.time.time + " - " + this.nextFire + " - " + this.fireRate, 10, 20);
  },
}

//Load Successful!
console.log("%cTown", "color:white; background:red");