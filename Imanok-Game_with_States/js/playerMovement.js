var playerMovement = function(game){}

level1.prototype.standStillUp = function() {
    player.loadTexture('playerSprite', 46);
} 
level1.prototype.standStillDown = function() {
    player.loadTexture('playerSprite', 10);
}  
level1.prototype.standStillLeft = function() {
    player.loadTexture('playerSprite', 22);
}  
level1.prototype.standStillRight = function() {
    player.loadTexture('playerSprite', 34);
}  


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