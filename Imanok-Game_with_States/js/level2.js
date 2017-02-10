var level2 = function(game){
 
  var map;
  var layer;
  var player;
  var movementDirection = null;
  
  //var text1;
}

level2.prototype = {
    create: function() {

      //Init game physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      //Background color
      this.game.stage.backgroundColor = '#787878';

      map = this.game.add.tilemap('levelMap');

      //Adds tilesets to map
      map.addTilesetImage('a_terrain', 'tiles');
      map.addTilesetImage('outside', 'tiles2');
      map.addTilesetImage('house', 'tiles3');
      map.addTilesetImage('water_updated', 'tiles4');

      //Map Collision Between Not Working
      map.setCollisionBetween(0, 6000, true, 'Collision', 'true');

      //Builds out level layers
      layer = map.createLayer('Terrain');
      layer8 = map.createLayer('Collision');
      layer2 = map.createLayer('Underlay');

      npc1 = this.game.add.sprite(1494, 1240, 'emoteSprite', 1);
      npc1.animations.add('emoteSprite', [30, 31, 32, 31]);
      npc1.animations.play('emoteSprite', 8, true);
      this.game.physics.arcade.enable(npc1);
      npc1.body.immovable = true;

      npc2 = this.game.add.sprite(2020, 1430, 'emoteSprite', 1);
      npc2.animations.add('emoteSprite', [66, 67, 68, 67]);
      npc2.animations.play('emoteSprite', 4, true);
      this.game.physics.arcade.enable(npc2);
      npc2.body.immovable = true;

      //Init player to level
      this.createPlayer();
      player.body.setSize(29, 28, 11, 44);


      layer9 = map.createLayer('Overlay');

      //  This resizes the game world to match the layer dimensions
      layer.resizeWorld();
      layer8.resizeWorld();


  //    var text1 = game.add.bitmapText(((window.innerWidth * window.devicePixelRatio)/2)-4, ((window.innerHeight * window.devicePixelRatio)/2)-20, 'sakredfont', 'Player', 24);
  //    text1.fixedToCamera = true;
      var text2 = this.game.add.bitmapText(100, 70, 'sakredfont', 'Valland: Level Two', 52);
      text2.fixedToCamera = true;
      var text3 = this.game.add.bitmapText(((window.innerWidth * window.devicePixelRatio)/2)-520, ((window.innerHeight * window.devicePixelRatio))-100, 'sakredfont', 'W/A/S/D to Move, O/N/L/Y for Emojis', 60);
      text3.fixedToCamera = true;
  
    },
    update: function () {
  
      this.game.physics.arcade.collide(player, npc1);
      this.game.physics.arcade.collide(player, npc2);
      this.game.physics.arcade.collide(player, layer8);

      player.body.velocity.y = 0;
      player.body.velocity.x = 0;

  //    text1.x = Math.floor(player.x + player.width / 2);
  //    text1.y = Math.floor(player.y + player.height / 2);

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
      {
          if (this.movementDirection != "left") {
              this.moveLeft();
          }
          player.body.velocity.x -= 400;

          if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
          {
              player.body.velocity.y -= 400;
          }
          else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
          {   
              player.body.velocity.y += 400;
          }
      }
      else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
      {
          if (this.movementDirection != "right") {
              this.moveRight();
          }
          player.body.velocity.x += 400;

          if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
          {
             player.body.velocity.y -= 400;
          }
          else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
          {   
              player.body.velocity.y += 400;
          }

      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
      {
          if (this.movementDirection != "up") {
              this.moveUp();
          }
          player.body.velocity.y -= 400;
      }
      else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
      {   
          if (this.movementDirection != "down") {
              this.moveDown();
          }
          player.body.velocity.y += 400;
      } else {

          if (this.movementDirection == "up") {
              this.standStillUp();
              movementDirection = null;
          }
          if (this.movementDirection == "down") {
              this.standStillDown();
              movementDirection = null;
          }
          if (this.movementDirection == "left") {
              this.standStillLeft();
              movementDirection = null;
          }
          if (this.movementDirection == "right") {
              this.standStillRight();
              movementDirection = null;
          } 
      }

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.L)) {
          playerLaugh();
      }
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.O)) {
          playerShock();
      }
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.N)) {
          playerNo();
      }
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.Y)) {
          playerYes();
      }
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
          this.game.state.start("Level1",true,false);
      }
        
        
  },

render: function () {
//    game.debug.body(player);
},

createPlayer: function  () {
    player = this.game.add.sprite(52, 74, 'playerSprite', 10);
    player.x = 1570;
    player.y = 1330;
    this.game.physics.arcade.enable(player);
    this.game.camera.follow(player);
    player.body.collideWorldBounds = true;
    player.body.linearDamping = 1;
},

standStillUp: function () {
    player.loadTexture('playerSprite', 46);
},
standStillDown: function () {
    player.loadTexture('playerSprite', 10);
},
standStillLeft: function () {
    player.loadTexture('playerSprite', 22);
},
standStillRight: function () {
    player.loadTexture('playerSprite', 34);
},
moveUp: function () {
    this.movementDirection = "up";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [45, 46, 47, 46]);
    player.animations.play('playerSprite', 5, true);
},
moveDown: function () {
    this.movementDirection = "down";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [9, 10, 11, 10]);
    player.animations.play('playerSprite', 5, true);
},
moveLeft: function () {
    this.movementDirection = "left";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [21, 22, 23, 22]);
    player.animations.play('playerSprite', 5, true);
},
moveRight: function () {
    this.movementDirection = "right";
    
    player.loadTexture('playerSprite');
    player.animations.add('playerSprite', [33, 34, 35, 34]);
    player.animations.play('playerSprite', 5, true);
},

playerLaugh: function () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [33, 34, 35, 34]);
    player.animations.play('emoteSprite', 8, true);
},
playerNo: function () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [21, 22, 23, 22]);
    player.animations.play('emoteSprite', 8, true);
},
playerYes: function () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [9, 10, 11, 10]);
    player.animations.play('emoteSprite', 8, true);
},
playerShock: function () {    
    player.loadTexture('emoteSprite');
    player.animations.add('emoteSprite', [45, 46, 47, 46]);
    player.animations.play('emoteSprite', 8, true);
}
  
}

console.log("%cLevel2", "color:white; background:red");