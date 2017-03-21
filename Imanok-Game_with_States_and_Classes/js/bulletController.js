var Bullet = function (game, x, y, direction) {
        Phaser.Sprite.call(this, game, x, y, 'ball');

        this.game.physics.arcade.enable(this);
  
        this.updateMovement = function() {
          if (direction == 'right') {
            this.body.velocity.x = 1000;
          } else if (direction == 'left') {
            this.body.velocity.x = -1000;
          } else if (direction == 'up') {
            this.body.velocity.y = -1000;
          } else if (direction == 'down') {
            this.body.velocity.y = 1000;
          }
        }
        
        game.time.events.add(Phaser.Timer.SECOND * 1, this.destroy, this);

    };

    Bullet.prototype = Object.create(Phaser.Sprite.prototype);
    Bullet.prototype.constructor = Bullet;

    Bullet.prototype.update = function () {

        this.updateMovement();

    };

    Bullet.prototype.render = function () {
      
//        this.game.debug.body(this);
      
    };


      /* Orbital mechanic, from level1.js create */
//    orb = this.game.add.sprite(playerX, playerY, 'ball');
//    orb.anchor.setTo(0.5);
//    orb.pivot.y = -20;
//    orb.pivot.x = 42;
//    
//    orb2 = this.game.add.sprite(playerX, playerY, 'ball');
//    orb2.anchor.setTo(0.5);
//    orb2.pivot.y = 49;
//    orb2.pivot.x = 0;
//    
//    orb3 = this.game.add.sprite(playerX, playerY, 'ball');
//    orb3.anchor.setTo(0.5);
//    orb3.pivot.y = -20;
//    orb3.pivot.x = -42;


      /* Firing mechanic, from level1.js create */
//      this.nextFire = 0;
//      this.fireRate = 100;
//      nextFire = this.game.add.group();
//      fireRate = this.game.add.group();


      /* Orbital mechanic, from level1.js update */
//    orb.x = player1.x; 
//    orb.y = player1.y;
//    orb.rotation += 0.05;
//    
//    orb2.x = player1.x; 
//    orb2.y = player1.y;
//    orb2.rotation += 0.05;
//    
//    orb3.x = player1.x; 
//    orb3.y = player1.y;
//    orb3.rotation += 0.05;


      /* Firing mechanic and fox spawner, from level1.js update */
//    if (this.game.input.keyboard.isDown(Phaser.Keyboard.F)) {
//      fox = new walkingAnimal(this.game, player1.x, player1.y, 'fox');
//		  this.game.add.existing(fox);
//      playerGroup.add(fox);
//    }
//    
//    if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
//      if (this.game.time.time > this.nextFire) { 
//      
//        bullet = new Bullet(this.game, player1.x + 40, player1.y, 'right');
//        this.game.add.existing(bullet);
//        this.nextFire = this.game.time.time + this.fireRate;
//        
//      }
//    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
//      if (this.game.time.time > this.nextFire) { 
//      
//        bullet = new Bullet(this.game, player1.x - 40, player1.y, 'left');
//        this.game.add.existing(bullet);
//        this.nextFire = this.game.time.time + this.fireRate;
//        
//      }
//    }
//    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
//      if (this.game.time.time > this.nextFire) { 
//      
//        bullet = new Bullet(this.game, player1.x - 10, player1.y - 50, 'up');
//        this.game.add.existing(bullet);
//        this.nextFire = this.game.time.time + this.fireRate;
//        
//      }
//    }
//    if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
//      if (this.game.time.time > this.nextFire) { 
//      
//        bullet = new Bullet(this.game, player1.x - 10, player1.y + 40, 'down');
//        this.game.add.existing(bullet);
//        this.nextFire = this.game.time.time + this.fireRate;
//        
//      }
//    }