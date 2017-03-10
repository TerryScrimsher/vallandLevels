Gate = function (game, x, y, scaleX, scaleY) {
		Phaser.Sprite.call(this, game, x, y);

    this.game.physics.arcade.enable(this);
    this.body.setSize(scaleX, scaleY, 0, 0);
};

Gate.prototype = Object.create(Phaser.Sprite.prototype);
Gate.prototype.constructor = Gate;

Gate.prototype.render = function() {
//  this.game.debug.body(Gate);
};


function exitPoint(obj, level, x, y, direction) {
  obj.state.start(level, true, false, x, y, direction);
}

//exitPoint("Level1-Ranch", 1154, 940, "up");