var preload = function(game){}

//Asset Variables
var playerCharacterSpritesheet = "img/chara2.png";
var emoteSpritesheet = "img/emote2.png";

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(550,540,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
      
    //Loads level json data
    this.game.load.tilemap('levelMap1', 'js/valland-town-update.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap2', 'js/valland-graveyard.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-potshop', 'js/valland-town-potionshop.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-inn', 'js/valland-town-inn.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-blacksmith', 'js/valland-town-blacksmith.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-itemshop', 'js/valland-town-itemshop.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-playerhouse', 'js/valland-town-playerhouse.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-lodge', 'js/valland-town-lodge.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('levelMap1-ranch', 'js/valland-town-ranch.json', null, Phaser.Tilemap.TILED_JSON);
    
    //Load player spritesheet
    this.game.load.spritesheet('playerSprite', playerCharacterSpritesheet, 52, 74, 70);
    
    //Load emote spritesheet
    this.game.load.spritesheet('emoteSprite', emoteSpritesheet, 52, 72, 70);
    
    //Loads level tilesets
    this.game.load.image('tiles', 'img/a_terrain.png');
    this.game.load.image('tiles2', 'img/outside.png');
    this.game.load.image('tiles3', 'img/house.png');
    this.game.load.image('tiles4', 'img/water_updated.png');
    this.game.load.image('tiles5', 'img/castle.png');
    this.game.load.image('tiles6', 'img/inside.png');
    this.game.load.image('tiles7', 'img/inside_ceilingborders_updated.png');
    this.game.load.image('tiles8', 'img/tiles_kitchen.png');
  
  
    //Load bitmap font
//    game.load.bitmapFont('sakredfont', 'fonts/sakredfont.png', 'fonts/sakredfont.fnt');
//    this.game.load.bitmapFont('sakredfont', 'fonts/sakredfont2.png', 'fonts/sakredfont2.fnt');
    this.game.load.bitmapFont('quirkfont', 'fonts/quirkfont.png', 'fonts/quirkfont.fnt');
    
    var loadingTitle = this.game.add.bitmapText(424, 160, 'sakredfont', 'Imanok', 100);
    var loadingSubTitle = this.game.add.bitmapText(410, 260, 'sakredfont', 'Domain of Valland', 40);
    

	},
  	create: function(){
		this.game.state.start("Level1");
	}
}