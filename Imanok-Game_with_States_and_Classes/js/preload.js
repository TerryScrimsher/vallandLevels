var preload = function(game){}

//Asset Variables
var playerCharacterSpritesheet = "img/chara2.png";
var animalCharacterSpritesheet = "img/animals2.png";
var emoteSpritesheet = "img/emote2.png";
var itemSpritesheet = "img/Item.png";

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(466,540,"loading");
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
    //Load animal spritesheet
    this.game.load.spritesheet('animalSprite', animalCharacterSpritesheet, 84, 74, 100);
    //Load itemsheet
    this.game.load.spritesheet('itemSprite', itemSpritesheet, 32, 32, 5000);
    
    this.game.load.image('ball', 'img/blue_ball.png');
    this.game.load.image('panel', 'img/buttonSquare.png');
    
    this.game.load.audio('footStep1', 'sound/footstep05_point12s.ogg');
    this.game.load.audio('footStep2', 'sound/footstep06.ogg');
    this.game.load.audio('collectCoin1', 'sound/handleCoins.ogg');
    this.game.load.audio('collectCoin2', 'sound/handleCoins2.ogg');
    this.game.load.audio('german', 'sound/RetroMystic.ogg');
    this.game.load.audio('comedy', 'sound/RetroComedy.ogg');
    this.game.load.audio('beat', 'sound/RetroBeat.ogg');
    this.game.load.audio('mystic', 'sound/RetroMystic.ogg');
    
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
    
    var loadingTitle = this.game.add.bitmapText(344, 160, 'sakredfont', 'Imanok', 100);
    var loadingSubTitle = this.game.add.bitmapText(330, 260, 'sakredfont', 'Domain of Valland', 40);
    

	},
  	create: function(){
    music = this.game.add.audio('mystic');
    music.loopFull(0.3);
		this.game.state.start("Level1");
	}
}