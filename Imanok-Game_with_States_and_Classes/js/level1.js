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
  
  var coinText, coin;
  
  var i;

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
    coinGroup = this.game.add.group();
    
    //Create NPCs
    npc = new NPC(this.game, 1516, 1270, 'Rogue');
		this.game.add.existing(npc);
    playerGroup.add(npc);

    npc = new NPC(this.game, 2050, 1460, 'Smith');
		this.game.add.existing(npc);
    playerGroup.add(npc);
    
    npc = new walkingNPC(this.game, 2030, 1540, 'Smith');
		this.game.add.existing(npc);
    playerGroup.add(npc);
    
    npc = new walkingNPC(this.game, 1620, 1030, 'Smith');
		this.game.add.existing(npc);
    playerGroup.add(npc);
    
    npc = new walkingNPC(this.game, 820, 800, 'Smith');
		this.game.add.existing(npc);
    playerGroup.add(npc);
    
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
    
    
    i = 0;
    while (i < 50) {
      coin = new Item(this.game, (Math.random() * (3000 - 1) + 1), (Math.random() * (3000 - 1) + 1));
//      coin = new Item(this.game, (Math.random() * (this.world.width - 1) + 1), (Math.random() * (this.world.height - 1) + 1));
      this.game.add.existing(coin);
      coinGroup.add(coin);
      i++
    }
    
    coin = new Item(this.game, 1600, 1500);
		this.game.add.existing(coin);
    coinGroup.add(coin);
    
    coin = new Item(this.game, 1600, 1600);
		this.game.add.existing(coin);
    coinGroup.add(coin);
    
    coin = new Item(this.game, 1600, 1700);
		this.game.add.existing(coin);
    coinGroup.add(coin);
    
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
    
    coins = 0;
    
    //Hud & Text Elements
    var locationText = this.game.add.bitmapText(40, 30, 'sakredfont', 'Town', 52);
    locationText.fixedToCamera = true;
    this.game.add.tween(locationText).to( { alpha: 0 }, 4000, "Linear", true, 2000);
    
    coinText = this.game.add.bitmapText(800, 30, 'quirkfont', '$ ' + coins, 52);
    coinText.fixedToCamera = true;
     
  },
  update: function() {
    
//    this.game.input.onDown.addOnce(updateText, this);
    
    playerGroup.sort('y', Phaser.Group.SORT_ASCENDING);
  
    this.game.physics.arcade.collide(playerGroup, collisionlayer);
    
//    this.game.physics.arcade.collide(player1, playerGroup, function(player, npc){npc.kill();}); 
    this.game.physics.arcade.collide(player1, playerGroup, function(player, npc){console.log("%cOuch!", "color:white; background:red");});
    this.game.physics.arcade.collide(player1, coinGroup, function(player, coin){coin.kill(); updateText();});

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
//    this.game.debug.body(player1);
//    this.game.debug.body(npc1);
//    
//    this.game.debug.text(player1.y, 10, 20);
//    this.game.debug.text(npc1.y, 10, 40);

//    this.game.debug.text('Sprite z-depth: ' + player1.z, 10, 20);
    this.game.debug.text('FPS:' + this.game.time.fps, 10, 20);
//    this.game.debug.text('Width: ' + window.innerWidth + " | Height: " + window.innerHeight, 10, 40);
//    this.game.debug.text('Time:' + this.game.time.time + " - " + this.nextFire + " - " + this.fireRate, 10, 20);
  },
}

function updateText() {

    coins++;

    coinText.setText("$ " + coins);

}

//Load Successful!
console.log("%cTown", "color:white; background:red");