var PlayerDirection = null;

//var obj;

Player = function (game, x, y, playerDirection) {
		Phaser.Sprite.call(this, game, x, y, "playerSprite", 10);
    this.x = x;
    this.y = y;
    this.game.physics.arcade.enable(this);
    this.body.setSize(29, 28, 11, 44);
//    this.body.immovable = true;
    this.game.camera.follow(this, Phaser.Camera.FOLLOW_LOCKON);
    this.body.collideWorldBounds = true;
    this.body.linearDamping = 1;
    this.anchor.setTo(.5, .5);
    this.PlayerDirection = playerDirection;
    walking1 = this.game.add.audio('footStep1'); 
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
	
Player.prototype.update = function() {
  
    this.body.velocity.y = 0;
    this.body.velocity.x = 0;

		if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      if (this.PlayerDirection != "left") {
        moveLeft(this);
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
      }
      this.body.velocity.y -= 400;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      if (this.PlayerDirection != "down") {
          moveDown(this);
      }
      this.body.velocity.y += 400;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.L)) {
        playerLaugh(this);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.O)) {
      playerShock(this);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.N)) {
      playerNo(this);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.Y)) {
      playerYes(this);
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.T)) {
      this.game.state.start("Level1", true, false);
    } else {

      walking1.pause();
      
      if (this.PlayerDirection == "up") {
        walking1.pause();
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
//    this.game.debug.body(this);
  };

  function playerControl (obj, keyInput) {
    console.log(obj.game.input.keyboard.event.keyCode);
    console.log(obj);
  }

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
    walking1.loopFull(0.1);
    
    obj.PlayerDirection = "up";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [45, 46, 47, 46]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveDown (obj) {
    walking1.loopFull(0.1);
    
    obj.PlayerDirection = "down";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [9, 10, 11, 10]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveLeft(obj) {
    walking1.loopFull(0.1);
    
    obj.PlayerDirection = "left";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [21, 22, 23, 22]);
    obj.animations.play('playerSprite', 5, true);
  }
  function moveRight (obj) {
    walking1.loopFull(0.1);
    
    obj.PlayerDirection = "right";

    obj.loadTexture('playerSprite');
    obj.animations.add('playerSprite', [33, 34, 35, 34]);
    obj.animations.play('playerSprite', 5, true);
  }
  function playerLaugh (obj) {
    obj.loadTexture('emoteSprite');
    obj.animations.add('emoteSprite', [33, 34, 35, 34]);
    obj.animations.play('emoteSprite', 8, true);
  }
  function playerNo (obj) {
    obj.loadTexture('emoteSprite');
    obj.animations.add('emoteSprite', [21, 22, 23, 22]);
    obj.animations.play('emoteSprite', 8, true);
  }
  function playerYes (obj) {
    obj.loadTexture('emoteSprite');
    obj.animations.add('emoteSprite', [9, 10, 11, 10]);
    obj.animations.play('emoteSprite', 8, true);
  }
  function playerShock (obj) {
    obj.loadTexture('emoteSprite');
    obj.animations.add('emoteSprite', [45, 46, 47, 46]);
    obj.animations.play('emoteSprite', 8, true);
  }