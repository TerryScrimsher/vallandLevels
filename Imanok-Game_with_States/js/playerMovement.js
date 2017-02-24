Pipe = function (game, x, y) {
		Phaser.Sprite.call(this, game, x, y, "emoteSprite");
		game.physics.enable(this, Phaser.Physics.ARCADE);	
    this.animations.add('emoteSprite', [66, 67, 68, 67]);
    this.animations.play('emoteSprite', 4, true);
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
};

Pipe.prototype = Object.create(Phaser.Sprite.prototype);
Pipe.prototype.constructor = Pipe;
	
Pipe.prototype.update = function() {};	


var PlayerDirection = null;

Player = function (game, x, y) {
		Phaser.Sprite.call(this, game, x, y, "playerSprite", 10);
    this.x = x;
    this.y = y;
    this.game.physics.arcade.enable(this);
    this.body.setSize(29, 28, 11, 44);
    this.game.camera.follow(this);
    this.body.collideWorldBounds = true;
    this.body.linearDamping = 1;
  
    this.PlayerDirection = playerDirection;
  
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
	
Player.prototype.update = function() {
  
    this.body.velocity.y = 0;
    this.body.velocity.x = 0;
  
  
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      if (this.PlayerDirection != "left") {
        moveLeft(this);
        console.log('Left');
      }
      this.body.velocity.x -= 400;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        this.body.velocity.y -= 400;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        this.body.velocity.y += 400;
      }
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      if (this.PlayerDirection != "right") {
        moveRight(this);
        console.log('Right');
      }
      this.body.velocity.x += 400;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        
        this.body.velocity.y -= 400;
        
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        
        this.body.velocity.y += 400;
      }

    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      if (this.PlayerDirection != "up") {
          moveUp(this);
          console.log('Up');
      }
      this.body.velocity.y -= 400;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      if (this.PlayerDirection != "down") {
          moveDown(this);
          console.log('Down');
      }
      this.body.velocity.y += 400;
    } else {

      if (this.PlayerDirection == "up") {
        standStillUp(this);
        this.PlayerDirection = null;
      }
      if (this.PlayerDirection == "down") {
        standStillDown(this);
        this.PlayerDirection = null;
      }
      if (this.PlayerDirection == "left") {
        standStillLeft(this);
        this.PlayerDirection = null;
      }
      if (this.PlayerDirection == "right") {
        standStillRight(this);
        this.PlayerDirection = null;
      }
    }

  
	};	

  Player.prototype.render = function() {
  
  };


  function standStillUp (obj) {
    obj.loadTexture('playerSprite', 46);
  }
  function standStillDown (obj) {
    obj.loadTexture('playerSprite', 10);
  }
  function standStillLeft (obj) {
    obj.loadTexture('playerSprite', 22);
  }
  function standStillRight (obj) {
    obj.loadTexture('playerSprite', 34);
  }

  function moveUp (obj) {
    obj.PlayerDirection = "up";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [45, 46, 47, 46]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveDown (obj) {
    obj.PlayerDirection = "down";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [9, 10, 11, 10]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveLeft(obj) {
    obj.PlayerDirection = "left";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [21, 22, 23, 22]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveRight (obj) {
    obj.PlayerDirection = "right";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [33, 34, 35, 34]);
    obj.animations.play('playerSprite', 5, true);
  }
//  playerLaugh: function() {
//    player.loadTexture('emoteSprite');
//    player.animations.add('emoteSprite', [33, 34, 35, 34]);
//    player.animations.play('emoteSprite', 8, true);
//  },
//  playerNo: function() {
//    player.loadTexture('emoteSprite');
//    player.animations.add('emoteSprite', [21, 22, 23, 22]);
//    player.animations.play('emoteSprite', 8, true);
//  },
//  playerYes: function() {
//    player.loadTexture('emoteSprite');
//    player.animations.add('emoteSprite', [9, 10, 11, 10]);
//    player.animations.play('emoteSprite', 8, true);
//  },
//  playerShock: function() {
//    player.loadTexture('emoteSprite');
//    player.animations.add('emoteSprite', [45, 46, 47, 46]);
//    player.animations.play('emoteSprite', 8, true);
//  },