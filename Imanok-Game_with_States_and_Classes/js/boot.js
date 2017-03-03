var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","img/loading2.png"); 
          this.game.load.bitmapFont('sakredfont', 'fonts/sakredfont2.png', 'fonts/sakredfont2.fnt');
	},
  	create: function(){
//		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
//		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}