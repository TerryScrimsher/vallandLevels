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


//var Weapon = {};
//
//    ////////////////////////////////////////////////////
//    //  A single bullet is fired in front of the ship //
//    ////////////////////////////////////////////////////
//
//    Weapon.SingleBullet = function (game) {
//
//        Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
//
//        this.nextFire = 0;
//        this.bulletSpeed = 600;
//        this.fireRate = 100;
//
//        for (var i = 0; i < 64; i++)
//        {
//            this.add(new Bullet(game, 'bullet5'), true);
//        }
//
//        return this;
//
//    };
//
//    Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
//    Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;
//
//    Weapon.SingleBullet.prototype.fire = function (source) {
//
//        if (this.game.time.time < this.nextFire) { return; }
//
//        var x = source.x + 10;
//        var y = source.y + 10;
//
//        this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
//
//        this.nextFire = this.game.time.time + this.fireRate;
//
//    };