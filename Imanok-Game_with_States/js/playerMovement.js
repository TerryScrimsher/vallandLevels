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



Player = function (game, x, y) {
		Phaser.Sprite.call(this, game, x, y, "playerSprite", 10);
    this.x = x;
    this.y = y;
    this.game.physics.arcade.enable(this);
//    this.game.camera.follow(this);
    this.body.collideWorldBounds = true;
    this.body.linearDamping = 1;
  
    this.movementDirection = playerDirection;
  
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
	
Player.prototype.update = function() {
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

      this.body.velocity.x -= 10;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        this.body.velocity.y -= 10;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        this.body.velocity.y += 10;
      }
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

      this.body.velocity.x += 10;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        this.body.velocity.y -= 10;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        this.body.velocity.y += 10;
      }

    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {

      this.body.velocity.y -= 10;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {

      this.body.velocity.y += 10;
    }
  
//  
//    this.body.velocity.y = 0;
//    this.body.velocity.x = 0;

  
	};	





//  moveUp: function() {
//    this.movementDirection = "up";
//
//    player.loadTexture('playerSprite');
//    player.animations.add('playerSprite', [45, 46, 47, 46]);
//    player.animations.play('playerSprite', 5, true);
//  },
//  moveDown: function() {
//    this.movementDirection = "down";
//
//    player.loadTexture('playerSprite');
//    player.animations.add('playerSprite', [9, 10, 11, 10]);
//    player.animations.play('playerSprite', 5, true);
//  },
//  moveLeft: function() {
//    this.movementDirection = "left";
//
//    player.loadTexture('playerSprite');
//    player.animations.add('playerSprite', [21, 22, 23, 22]);
//    player.animations.play('playerSprite', 5, true);
//  },
//  moveRight: function() {
//    this.movementDirection = "right";
//
//    player.loadTexture('playerSprite');
//    player.animations.add('playerSprite', [33, 34, 35, 34]);
//    player.animations.play('playerSprite', 5, true);
//  },
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