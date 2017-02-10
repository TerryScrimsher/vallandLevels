var preload = function(game){}

//Asset Variables
var playerCharacterSpritesheet = "img/chara2.png";
var emoteSpritesheet = "img/emote2.png";

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
      
    //Loads level json data
    this.game.load.tilemap('levelMap', 'js/valland-town-update.json', null, Phaser.Tilemap.TILED_JSON);
    
    //Load player spritesheet
    this.game.load.spritesheet('playerSprite', playerCharacterSpritesheet, 52, 74, 70);
    
    //Load emote spritesheet
    this.game.load.spritesheet('emoteSprite', emoteSpritesheet, 52, 72, 70);
    
    //Loads level tilesets
    this.game.load.image('tiles', 'img/a_terrain.png');
    this.game.load.image('tiles2', 'img/outside.png');
    this.game.load.image('tiles3', 'img/house.png');
    this.game.load.image('tiles4', 'img/water_updated.png');
  
    //Load bitmap font
//    game.load.bitmapFont('sakredfont', 'fonts/sakredfont.png', 'fonts/sakredfont.fnt');
    this.game.load.bitmapFont('sakredfont', 'fonts/font.png', 'fonts/font.fnt');

	},
  	create: function(){
		this.game.state.start("Level1");
	}
}