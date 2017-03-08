Gate = function (game, x, y, scaleX, scaleY) {
		Phaser.Sprite.call(this, game, x, y);

    this.game.physics.arcade.enable(this);
    this.body.setSize(scaleX, scaleY, 0, 0);
//    this.body.setSize(29, 28, 11, 44);
};

Gate.prototype = Object.create(Phaser.Sprite.prototype);
Gate.prototype.constructor = Gate;

Gate.prototype.render = function() {
//  this.game.debug.body(Gate);
};