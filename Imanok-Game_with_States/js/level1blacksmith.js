var level1blacksmith = function(game) {

  var map;
  var layer;
  var player;
  var movementDirection = null;

  var playerX;
  var playerY;

  //var text1;
}

level1blacksmith.prototype = {
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

    map = this.game.add.tilemap('levelMap1-blacksmith');

    //Adds tilesets to map
//    map.addTilesetImage('a_terrain', 'tiles');
//    map.addTilesetImage('outside', 'tiles2');
//    map.addTilesetImage('house', 'tiles3');
//    map.addTilesetImage('water_updated', 'tiles4');
    map.addTilesetImage('inside', 'tiles6');
    map.addTilesetImage('inside_ceilingborders_updated', 'tiles7');

    //Map Collision Between Not Working
    map.setCollisionBetween(0, 10000, true, 'Collision', 'true');
    map.setCollisionBetween(0, 10000, true, 'Objects', 'true');

    //Builds out level layers
//    layer = map.createLayer('Terrain');
    layer = map.createLayer('Floor');
    layer8 = map.createLayer('Collision');
//    layer2 = map.createLayer('Underlay');
    layer11 = map.createLayer('Objects');

    npc1 = this.game.add.sprite(966, 598, 'emoteSprite', 1);
    npc1.animations.add('emoteSprite', [30, 31, 32, 31]);
    npc1.animations.play('emoteSprite', 8, true);
    this.game.physics.arcade.enable(npc1);
    npc1.body.immovable = true;

    //Exit: Potionshop    
    exitPotshop = this.game.add.sprite(768, 1020);
    this.game.physics.arcade.enable(exitPotshop);
    exitPotshop.body.immovable = true;
    exitPotshop.scale.x = 2;
    exitPotshop.scale.y = .1;

    //Init player to level
    this.createPlayer(playerX, playerY, playerDirection);
    player.body.setSize(29, 28, 11, 44);

    layer9 = map.createLayer('Overlay');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
    layer8.resizeWorld();

    //    var text1 = game.add.bitmapText(((window.innerWidth * window.devicePixelRatio)/2)-4, ((window.innerHeight * window.devicePixelRatio)/2)-20, 'sakredfont', 'Player', 24);
    //    text1.fixedToCamera = true;
    var text2 = this.game.add.bitmapText(60, 60, 'sakredfont', 'Valland: Blacksmith', 52);
    text2.fixedToCamera = true;
    this.game.add.tween(text2).to( { alpha: 0 }, 4000, "Linear", true, 2000);
    var text3 = this.game.add.bitmapText(90, 160, 'quirkfont', 'W/A/S/D to Move\nL = Laugh\nO = Surprised\nY = Yes\nN = No\nT = Teleport', 30);
    text3.fixedToCamera = true;

  },
  update: function() {

    this.game.physics.arcade.collide(player, npc1);
    this.game.physics.arcade.collide(player, layer8);
    this.game.physics.arcade.collide(player, layer11);

    this.game.physics.arcade.collide(player, exitPotshop, this.exitLevel, null, this);

    player.body.velocity.y = 0;
    player.body.velocity.x = 0;

    //    text1.x = Math.floor(player.x + player.width / 2);
    //    text1.y = Math.floor(player.y + player.height / 2);

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      if (this.movementDirection != "left") {
        this.moveLeft();
      }
      player.body.velocity.x -= 400;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        player.body.velocity.y -= 400;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        player.body.velocity.y += 400;
      }
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      if (this.movementDirection != "right") {
        this.moveRight();
      }
      player.body.velocity.x += 400;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        player.body.velocity.y -= 400;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        player.body.velocity.y += 400;
      }

    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      if (this.movementDirection != "up") {
        this.moveUp();
      }
      player.body.velocity.y -= 400;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      if (this.movementDirection != "down") {
        this.moveDown();
      }
      player.body.velocity.y += 400;
    } else {

      if (this.movementDirection == "up") {
        this.standStillUp();
        this.movementDirection = null;
      }
      if (this.movementDirection == "down") {
        this.standStillDown();
        this.movementDirection = null;
      }
      if (this.movementDirection == "left") {
        this.standStillLeft();
        this.movementDirection = null;
      }
      if (this.movementDirection == "right") {
        this.standStillRight();
        this.movementDirection = null;
      }
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.L)) {
      this.playerLaugh();
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.O)) {
      this.playerShock();
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.N)) {
      this.playerNo();
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.Y)) {
      this.playerYes();
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.T)) {
      this.game.state.start("Level2", true, false);
    }

  },

  render: function() {
//        this.game.debug.body(player);
//        this.game.debug.body(exitPotshop);
  },

  createPlayer: function(playerX, playerY, playerDirection) {
    player = this.game.add.sprite(52, 74, 'playerSprite', 10);
    player.x = playerX;
    player.y = playerY;
    this.game.physics.arcade.enable(player);
    this.game.camera.follow(player);
    player.body.collideWorldBounds = true;
    player.body.linearDamping = 1;

    this.movementDirection = playerDirection;
  },

  standStillUp: function() {
    player.loadTexture('playerSprite', 46);
  },
  standStillDown: function() {
    player.loadTexture('playerSprite', 10);
  },
  standStillLeft: function() {
    player.loadTexture('playerSprite', 22);
  },
  standStillRight: function() {
    player.loadTexture('playerSprite', 34);
  },
  moveUp: function() {
    this.movementDirection = "up";

    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [45, 46, 47, 46]);
    player.animations.play('playerSprite', 5, true);
  },
  moveDown: function() {
    this.movementDirection = "down";

    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [9, 10, 11, 10]);
    player.animations.play('playerSprite', 5, true);
  },
  moveLeft: function() {
    this.movementDirection = "left";

    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [21, 22, 23, 22]);
    player.animations.play('playerSprite', 5, true);
  },
  moveRight: function() {
    this.movementDirection = "right";

    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [33, 34, 35, 34]);
    player.animations.play('playerSprite', 5, true);
  },
  playerLaugh: function() {
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [33, 34, 35, 34]);
    player.animations.play('emoteSprite', 8, true);
  },
  playerNo: function() {
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [21, 22, 23, 22]);
    player.animations.play('emoteSprite', 8, true);
  },
  playerYes: function() {
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [9, 10, 11, 10]);
    player.animations.play('emoteSprite', 8, true);
  },
  playerShock: function() {
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [45, 46, 47, 46]);
    player.animations.play('emoteSprite', 8, true);
  },
  exitLevel: function() {
    this.game.state.start("Level1", true, false, 2263, 1272, "down");
  }

}

console.log("%cLevel1 Potionshop", "color:white; background:red");