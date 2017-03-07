//Gate = function (game, x, y) {
//		Phaser.Sprite.call(this, game, x, y, "playerSprite", 10);
//    this.game.physics.arcade.enable(this);
//    this.body.immovable = true;
//    this.scale.x = 1;
//    this.scale.y = .1;
//};
//
//Gate.prototype = Object.create(Gate.Sprite.prototype);
//Gate.prototype.constructor = Gate;







//    exitInn = this.game.add.sprite(1376, 1290);
//    this.game.physics.arcade.enable(exitInn);
//    exitInn.body.immovable = true;
//    exitInn.scale.x = 1;
//    exitInn.scale.y = .1;


//player2 = new Player(this.game, playerX, playerY, playerDirection);


//Player = function (game, x, y, playerDirection) {
//		Phaser.Sprite.call(this, game, x, y, "playerSprite", 10);
//    this.x = x;
//    this.y = y;
//    this.game.physics.arcade.enable(this);
//    this.body.setSize(29, 28, 11, 44);
//    this.game.camera.follow(this, Phaser.Camera.FOLLOW_LOCKON);
//    this.body.collideWorldBounds = true;
//    this.body.linearDamping = 1;
//    this.anchor.setTo(.5, .5);
//    this.PlayerDirection = playerDirection;
//  
//};
//
//Player.prototype = Object.create(Phaser.Sprite.prototype);
//Player.prototype.constructor = Player;